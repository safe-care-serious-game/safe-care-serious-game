import AudioContext from "../audio-context/AudioContext";
import Button from "../button/Button";
import css from "./LevelDialogue.module.css";
import { useContext } from "react";

function LevelDialogue(props) {
  const { clickAudio } = useContext(AudioContext);

  const shouldRenderCharacterName = props.characterName;

  const shouldRenderDialogue = props.dialogue;

  const shouldRenderPreviousButton = props.hasPrevious;

  const shouldRenderNextButton = props.hasNext;

  const shouldRenderEndButton = !props.hasNext;

  function previous() {
    if (props.onPrevious) {
      clickAudio.play().catch((err) => {
        // Ignore error
      });
      props.onPrevious();
    }
  }

  function next() {
    if (props.onNext) {
      clickAudio.play().catch((err) => {
        // Ignore error
      });
      props.onNext();
    }
  }

  function end() {
    if (props.onEnd) {
      clickAudio.play().catch((err) => {
        // Ignore error
      });
      props.onEnd();
    }
  }

  return (
    <div className={css.levelDialogue}>
      <div className={css.levelDialogueCharacterName}>
        {shouldRenderCharacterName && <span>{props.characterName}</span>}
      </div>
      <div className={css.levelDialogueText}>
        {shouldRenderDialogue && <p>{props.dialogue}</p>}

        <div className={css.levelDialogueTextToolbar}>
          {shouldRenderPreviousButton ? (
            <Button
              className={css.levelDialogueTextToolbarButton}
              onClick={() => previous()}
            >
              Anterior
            </Button>
          ) : (
            <Button style={{ visibility: "hidden" }} />
          )}

          {shouldRenderNextButton && (
            <Button
              className={css.levelDialogueTextToolbarButton}
              onClick={() => next()}
            >
              Próximo
            </Button>
          )}

          {shouldRenderEndButton && (
            <Button
              className={css.levelDialogueTextToolbarButton}
              onClick={() => end()}
            >
              Fim
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LevelDialogue;
