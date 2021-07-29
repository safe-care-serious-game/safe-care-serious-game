import './LevelDialogue.css';

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
        <div className="Level-Dialogue">
            <div className="Level-Dialogue-Character-Name">
                <span style={characterNameStyle}>{props.characterName}</span>
            </div>
            <div className="Level-Dialogue-Text">
                <p style={dialogueStyle}>{props.dialogue}</p>

                <div className="Level-Dialogue-Text-Toolbar">
                    <button onClick={() => previous()} style={previousButtonStyle}>Anterior</button>
                    <button onClick={() => next()} style={nextButtonStyle}>Próximo</button>
                    <button onClick={() => end()} style={endButtonStyle}>Fim</button>
                </div>
            </div>
        </div>
    );
}

export default LevelDialogue;
