import Button from '../button/Button';
import css from './LevelDialogue.module.css';

function LevelDialogue(props) {
    const characterNameStyle = {
        visibility: props.characterName ? 'visible' : 'hidden'
    };

    const dialogueStyle = {
        display: props.dialogue ? 'block' : 'none'
    };

    const previousButtonStyle = {
        visibility: props.hasPrevious ? 'visible' : 'hidden'
    };
    
    const nextButtonStyle = {
        display: props.hasNext ? 'inline-block' : 'none'
    };

    const endButtonStyle = {
        display: props.hasNext ? 'none' : 'inline-block'
    };
    
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
                <span style={characterNameStyle}>{props.characterName}</span>
            </div>
            <div className={css.levelDialogueText}>
                <p style={dialogueStyle}>{props.dialogue}</p>

                <div className={css.levelDialogueTextToolbar}>
                    <Button className={css.levelDialogueTextToolbarButton} onClick={() => previous()} style={previousButtonStyle}>Anterior</Button>
                    <Button className={css.levelDialogueTextToolbarButton} onClick={() => next()} style={nextButtonStyle}>Próximo</Button>
                    <Button className={css.levelDialogueTextToolbarButton} onClick={() => end()} style={endButtonStyle}>Fim</Button>
                </div>
            </div>
        </div>
    );
}

export default LevelDialogue;
