import AudioContext from "../audio-context/AudioContext";
import Button from "../button/Button";
import LevelDialogue from "../level-dialogue/LevelDialogue";
import LevelEnd from "../level-end/LevelEnd";
import LevelOptions from "../level-options/LevelOptions";
import LevelToolbar from "../level-toolbar/LevelToolbar";
import data from "../../data";
import css from "./Level.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import isEqual from "lodash.isequal";

function Level(props) {
  const { clickAudio, confirmationAudio, errorAudio, finishAudio } =
    useContext(AudioContext);
  const history = useHistory();
  const { gameMode, levelId } = useParams();

  const [levelData, setLevelData] = useState([]);
  const [levelDataIndex, setLevelDataIndex] = useState(-1);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [shots, setShots] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [dialogue, setDialogue] = useState("");
  const [transitionText, setTransitionText] = useState("");
  const [helperText, setHelperText] = useState("");
  const [shouldRenderHelperText, setShouldRenderHelperText] = useState(false);
  const [options, setOptions] = useState([]);
  const [multipleOptions, setMultipleOptions] = useState([]);
  const [levelSubject, setLevelSubject] = useState("");
  const [additionalHeader, setAdditionalHeader] = useState("");
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef();

  const shouldRenderTransitionText = transitionText && !hasEnded;

  const shouldRenderOptions = options.length !== 0 && !hasEnded;

  const shouldRenderMultipleOptions = multipleOptions.length !== 0 && !hasEnded;

  const shouldRenderLevelEnd = hasEnded;

  const shouldRenderDialog = options.length === 0 && !hasEnded;

  const addCheckedTo = (array) =>
    array.map((item) => ({ ...item, checked: false }));

  useEffect(() => {
    setLevelData([...data[levelId]]);
  }, [levelId]);

  useEffect(() => {
    if (levelData.length === 0) {
      return;
    }

    setLevelDataIndex(0);
  }, [levelData]);

  useEffect(() => {
    if (
      !levelData ||
      Object.keys(levelData).length === 0 ||
      levelData.length === 0 ||
      levelDataIndex === -1
    ) {
      return;
    }

    // Previous/next
    setHasPrevious(
      levelDataIndex !== 0 &&
        levelData[levelDataIndex - 1].options === undefined &&
        levelData[levelDataIndex - 1].multipleOptions === undefined
    );
    setHasNext(levelDataIndex + 1 < levelData.length);

    // Other data
    const incomingShots = levelData[levelDataIndex].shots ?? [];
    if (!isEqual(incomingShots, shots)) {
      setShots([...incomingShots]);
    }
    setCharacterName(
      levelData[levelDataIndex].characterName
        ? levelData[levelDataIndex].characterName
        : ""
    );
    setDialogue(
      levelData[levelDataIndex].dialogue
        ? levelData[levelDataIndex].dialogue
        : ""
    );
    setTransitionText(
      levelData[levelDataIndex].transitionText
        ? levelData[levelDataIndex].transitionText
        : ""
    );
    setHelperText(
      levelData[levelDataIndex].helperText
        ? levelData[levelDataIndex].helperText
        : ""
    );
    setShouldRenderHelperText(false);
    setOptions(
      levelData[levelDataIndex].options
        ? [...levelData[levelDataIndex].options]
        : [...[]]
    );
    setMultipleOptions(
      levelData[levelDataIndex].multipleOptions
        ? [...addCheckedTo(levelData[levelDataIndex].multipleOptions)]
        : [...[]]
    );
    setLevelSubject(
      levelData[levelDataIndex].levelSubject
        ? levelData[levelDataIndex].levelSubject
        : ""
    );
    setAdditionalHeader(
      levelData[levelDataIndex].additionalHeader
        ? levelData[levelDataIndex].additionalHeader
        : ""
    );
  }, [levelData, levelDataIndex, shots]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    // Abort current playback
    videoRef.current.src = "";
    videoRef.current.load();

    // Start new playback
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
    videoRef.current.removeAttribute("src");
    videoRef.current.load();
    let playbackPromise = videoRef.current.play();
    if (playbackPromise) {
      playbackPromise.catch(
        () => /* Capture exception to avoid flooding the logs */ {}
      );
    }
  }, [shots, videoRef]);

  function previous() {
    if (!hasPrevious) {
      return;
    }
    setLevelDataIndex(levelDataIndex - 1);
  }

  function next() {
    if (!hasNext) {
      return;
    }
    if (multipleOptions.length !== 0) {
      const maxScoreFromMultipleOptions = multipleOptions.reduce(
        (accumulator, item) => accumulator + item.score,
        0
      );
      const scoreFromMultipleOptions = multipleOptions.reduce(
        (accumulator, item) => {
          if (
            (item.checked && item.correct) ||
            (!item.checked && !item.correct)
          ) {
            return accumulator + item.score;
          }

          return accumulator;
        },
        0
      );

      setScore(score + scoreFromMultipleOptions);

      // In case the player fails to check all correct options, we report the correct options
      if (scoreFromMultipleOptions < maxScoreFromMultipleOptions) {
        let correctOptions = multipleOptions.reduce(
          (accumulator, item) =>
            (accumulator += item.correct ? `"${item.text}", ` : ""),
          ""
        );
        correctOptions = correctOptions.substring(0, correctOptions.length - 2); // Removes the trailing ", "

        errorAudio.play();

        // Reset multiple options and report results
        setMultipleOptions([...[]]);
        setTransitionText([
          "Que pena! Você não marcou todas as opções corretas.",
          "",
          `As opções corretas eram: ${correctOptions}.`,
        ]);
        setHasPrevious(false);

        return;
      }
    }
    setLevelDataIndex(levelDataIndex + 1);
  }

  function end() {
    finishAudio.play();
    setHasEnded(true);
    if (props.saveHighScore) {
      props.saveHighScore(levelId, score);
    }
  }

  function selectOption(option) {
    const isCorrect = option.correct;
    if (isCorrect) {
      confirmationAudio.play();

      setScore(score + option.score);
    }
    if (!isCorrect && helperText) {
      errorAudio.play();

      setOptions([...[]]);
      setHasPrevious(false);
      setShouldRenderHelperText(true);
      return;
    }
    next();
  }

  function toggleOption(checked, index) {
    multipleOptions[index] = {
      ...multipleOptions[index],
      checked: checked,
    };

    clickAudio.play();

    setMultipleOptions([...multipleOptions]);
  }

  const listOptions = options.map((option, index) => (
    <Button
      key={index}
      className={css.levelUIOptionItem}
      onClick={() => {
        clickAudio.play();
        selectOption(option);
      }}
    >
      {option.dialogue}
    </Button>
  ));

  const listMultipleOptions = (
    <div className={css.levelUIMultipleOptionsContainer}>
      {multipleOptions.map((option, index) => (
        <div key={index}>
          <input
            id={`option-${index + 1}`}
            type="checkbox"
            className={css.levelUIMultipleOptionsItemInput}
            onChange={(event) => toggleOption(event.target.checked, index)}
          />
          <Button className={css.levelUIMultipleOptionsItem}>
            <label htmlFor={`option-${index + 1}`}>{option.text}</label>
          </Button>
        </div>
      ))}
    </div>
  );

  return (
    <div className={css.level}>
      {!isVideoPlaying && (
        <p className={css.levelUILoadingIndicator}>{"Carregando..."}</p>
      )}
      <video
        className={css.levelVideo}
        ref={videoRef}
        preload="auto"
        autoPlay
        playsInline
        onLoadStart={() => setVideoPlaying(false)}
        onPlaying={() => setVideoPlaying(true)}
      >
        {shots.map((shot) => (
          <source key={shot.id} src={shot.src} type={shot.type} />
        ))}
      </video>
      <div className={css.levelUI}>
        <LevelToolbar>
          <span className={css.levelToolbarScore}>{score}</span>
          <Button
            className={css.levelToolbarButton}
            onClick={() => {
              clickAudio.play();
              history.push(`/${gameMode}/levels`);
            }}
          >
            Sair
          </Button>
        </LevelToolbar>

        {shouldRenderTransitionText && (
          <>
            {Array.isArray(transitionText) ? (
              <div className={css.levelUITransitionText}>
                {transitionText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            ) : (
              <p className={css.levelUITransitionText}>{transitionText}</p>
            )}
          </>
        )}

        {shouldRenderHelperText && (
          <p className={css.levelUIHelperText}>{helperText}</p>
        )}

        {shouldRenderOptions && (
          <LevelOptions
            options={options}
            dialogue={dialogue}
            levelSubject={levelSubject}
            additionalHeader={additionalHeader}
          >
            {listOptions}
          </LevelOptions>
        )}

        {shouldRenderMultipleOptions && (
          <LevelOptions multiple>{listMultipleOptions}</LevelOptions>
        )}

        {shouldRenderLevelEnd && <LevelEnd levelId={levelId} score={score} />}

        {shouldRenderDialog && (
          <LevelDialogue
            characterName={characterName}
            dialogue={dialogue}
            hasPrevious={hasPrevious}
            onPrevious={() => previous()}
            hasNext={hasNext}
            onNext={() => next()}
            onEnd={() => end()}
          />
        )}
      </div>
    </div>
  );
}

export default Level;
