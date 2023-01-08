import Button from "../button/Button";
import css from "./LevelDialogue.module.css";

function LevelDialogue(props) {
  const shouldRenderCharacterName = () => props.characterName;

  const shouldRenderDialogue = () => props.dialogue;

  const shouldRenderPreviousButton = () => props.hasPrevious;

  const shouldRenderNextButton = () => props.hasNext;

  const shouldRenderEndButton = () => !props.hasNext;

  function previous() {
    if (props.onPrevious) {
      props.onPrevious();
    }
  }

  function next() {
    if (props.onNext) {
      props.onNext();
    }
  }

  function end() {
    if (props.onEnd) {
      props.onEnd();
    }
  }

  return (
    <div className={css.levelDialogue}>
      <div className={css.levelDialogueCharacterName}>
        {shouldRenderCharacterName() && <span>{props.characterName}</span>}
      </div>
      <div className={css.levelDialogueText}>
        {shouldRenderDialogue() && <p>{props.dialogue}</p>}

        <div className={css.levelDialogueTextToolbar}>
          {shouldRenderPreviousButton() ? (
            <Button
              className={css.levelDialogueTextToolbarButton}
              onClick={() => previous()}
            >
              Anterior
            </Button>
          ) : (
            <Button style={{ visibility: "hidden" }} />
          )}

          {shouldRenderNextButton() && (
            <Button
              className={css.levelDialogueTextToolbarButton}
              onClick={() => next()}
            >
              Próximo
            </Button>
          )}

          {shouldRenderEndButton() && (
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
