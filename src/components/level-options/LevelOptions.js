import css from './LevelOptions.module.css';

function LevelOptions(props) {
    const additionalHeaderStyle = {
        display: props.dialogue && props.levelSubject ? 'block' : 'none'
    }

    return (
        <div className={css.levelOptions}>
            <h1 className={css.levelOptionsHeader} style={additionalHeaderStyle}>A conduta "{props.dialogue} é adequada para {props.levelSubject}?</h1>
            <h1 className={css.levelOptionsHeader}>Escolha uma opção:</h1>
            {props.children}
        </div>
    );
}

export default LevelOptions;
