import { useHistory } from 'react-router-dom';
import css from './LevelEnd.module.css';

function LevelEnd(props) {
    const history = useHistory();

    function playAgain() {
        history.push('/levels')
        history.goBack();
    }

    return (
        <div className={css.levelEndOverlay}>
            <div className={css.levelEndDialog}>
                <h1 className={css.levelEndHeader}>Fase {props.levelId}</h1>
                <p>Parabéns! Fase concluída!</p>
                <p>Pontuação: {props.score}</p>
                <div className={css.levelEndButtons}>
                    <button onClick={() => playAgain()}>Jogar novamente</button>
                    <button onClick={() => history.replace('/levels')}>Sair</button>
                </div>
            </div>
        </div>
    );
}

export default LevelEnd;
