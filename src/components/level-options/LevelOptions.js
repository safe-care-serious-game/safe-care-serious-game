import './LevelOptions.css';

function LevelOptions(props) {
    const additionalHeaderStyle = {
        display: props.dialogue && props.levelSubject ? 'block' : 'none'
    }

    return (
        <div className="Level-Options">
            <h1 className="Level-Options-Header" style={additionalHeaderStyle}>A conduta "{props.dialogue}" é adequada para {props.levelSubject}?</h1>
            <h1 className="Level-Options-Header">Escolha uma opção:</h1>
            {props.children}
        </div>
    );
}

export default LevelOptions;
