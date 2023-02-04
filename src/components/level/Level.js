import Button from "../button/Button";
import LevelDialogue from "../level-dialogue/LevelDialogue";
import LevelEnd from "../level-end/LevelEnd";
import LevelOptions from "../level-options/LevelOptions";
import LoadingScreen from "../loading-screen/LoadingScreen";
import LevelToolbar from "../level-toolbar/LevelToolbar";
import data from "../../data";
import css from "./Level.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import isEqual from "lodash.isequal";

function Level() {
  const history = useHistory();
  const { gameMode, levelId } = useParams();

  const [levelData, setLevelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0.0);
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
  const videoRef = useRef();

  const addCheckedTo = (array) =>
    array.map((item) => ({ ...item, checked: false }));

  useEffect(() => {
    const toLoadLevelData = data[levelId];

    new Promise(async (resolve) => {
      let videoElement = document.createElement("video");
      let progress = 0.0;

      const toLoadShots = toLoadLevelData
        .map((section) => section.shots)
        .filter((shots) => shots);

      //const loadPromises = 
      
      let previousPromise = null;

      toLoadShots.forEach(async (shots, index) => {
        const promiseCallback = () => {
          if ((index + 1) === toLoadShots.length) {
            // Hint that the video element could be clear from memory
            videoElement = null;

            resolve();
          }
        };
        const promise = new Promise((resolve) => {
          const sources = shots.map((shot) => {
            const sourceElement = document.createElement("source");
            sourceElement.setAttribute("src", shot.src);
            sourceElement.setAttribute("type", shot.type);
            return sourceElement;
          });

          videoElement.setAttribute("src", "");
          videoElement.setAttribute("preload", "auto");

          sources.forEach((source) => videoElement.appendChild(source));

          // Wait for video to finish loading
          let done = false;
          const finishedLoading = () => {
            if (done) {
              // Only do it once for each video element
              return;
            }

            done = true;

            // Clear event listeners
            videoElement.removeEventListener("canplay", finishedLoading);
            videoElement.removeEventListener("canplaythrough", finishedLoading);
            videoElement.removeEventListener("abort", finishedLoading);
            videoElement.removeEventListener("stalled", finishedLoading);
            videoElement.removeEventListener("suspend", finishedLoading);
            videoElement.removeEventListener("error", finishedLoading);

            // Update progress
            progress += (1 / toLoadShots.length) * 100;
            setLoadingProgress(progress);
            resolve();
          };

          videoElement.addEventListener("canplay", finishedLoading);
          videoElement.addEventListener("canplaythrough", finishedLoading);
          videoElement.addEventListener("abort", finishedLoading);
          videoElement.addEventListener("stalled", finishedLoading);
          videoElement.addEventListener("suspend", finishedLoading);
          // FIXME: error event should be considered a failure an prevent the player from continuing
          videoElement.addEventListener("error", finishedLoading);

          // Load
          videoElement.removeAttribute("src");
          videoElement.load();
        });
        result.then().catch(() => {
          // Ignore for now
          if ((index + 1) === toLoadShots.length) {
            // Hint that the video element could be clear from memory
            videoElement = null;

            resolve();
          }
        });
      });

      //await Promise.all(loadPromises);
//
      //// Hint that the video element could be clear from memory
      //videoElement = null;
//
      //resolve();
    })
      .then(() => {
        setLoading(false);
        setLoadingProgress(100.0);
        setLevelData([...toLoadLevelData]);
      })
      .catch(() => {
        // Ignore for now
      });
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
  }, [levelData, levelDataIndex, shots]);

  useEffect(() => {
    if (shots.length === 0 || !videoRef.current) {
      return;
    }

    // Abort current playback
    videoRef.current.setAttribute("src", "");
    videoRef.current.load();

    // Start new playback
    videoRef.current.removeAttribute("src");
    videoRef.current.load();
    let playbackPromise = videoRef.current.play();
    if (playbackPromise) {
      playbackPromise.catch(
        () => /* Capture exception to avoid flooding the logs */ {}
      );
    }
  }, [shots, videoRef]);

  const shouldRenderTransitionText = transitionText && !hasEnded;

  const shouldRenderOptions = options.length !== 0 && !hasEnded;

  const shouldRenderMultipleOptions = multipleOptions.length !== 0 && !hasEnded;

  const shouldRenderLevelEnd = hasEnded;

  const shouldRenderDialog = options.length === 0 && !hasEnded;

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
    }
    setLevelDataIndex(levelDataIndex + 1);
  }

  function end() {
    setHasEnded(true);
  }

  function selectOption(option) {
    const isCorrect = option.correct;
    if (isCorrect) {
      setScore(score + option.score);
    }
    if (!isCorrect && helperText) {
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

    setMultipleOptions([...multipleOptions]);
  }

  const listOptions = options.map((option, index) => (
    <Button
      key={index}
      className={css.levelUIOptionItem}
      onClick={() => selectOption(option)}
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
          <label
            htmlFor={`option-${index + 1}`}
            className={css.levelUIMultipleOptionsItem}
          >
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className={css.level}>
      {loading && (
        <LoadingScreen progress={`${loadingProgress.toFixed(2)} %`} />
      )}
      <video className={css.levelVideo} ref={videoRef}>
        {shots.map((shot) => (
          <source key={shot.id} src={shot.src} type={shot.type} />
        ))}
      </video>
      {!loading && (
        <div className={css.levelUI}>
          <LevelToolbar>
            <span className={css.levelToolbarScore}>{score}</span>
            <Button
              className={css.levelToolbarButton}
              onClick={() => history.push(`/${gameMode}/levels`)}
            >
              Sair
            </Button>
          </LevelToolbar>

          {shouldRenderTransitionText && (
            <p className={css.levelUITransitionText}>{transitionText}</p>
          )}

          {shouldRenderHelperText && (
            <p className={css.levelUIHelperText}>{helperText}</p>
          )}

          {shouldRenderOptions && (
            <LevelOptions
              options={options}
              dialogue={dialogue}
              levelSubject={levelSubject}
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
      )}
    </div>
  );
}

export default Level;
