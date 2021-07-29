import { useHistory } from 'react-router-dom';
import './LevelEnd.css';

function LevelEnd(props) {
    const history = useHistory();

    function playAgain() {
        history.push('/levels')
        history.goBack();
    }

    return (
        <div className="Level-End-Overlay">
            <div className="Level-End-Dialog">
                <h1 className="Level-End-Header">Fase {props.levelId}</h1>
                <p>Parabéns! Fase concluída!</p>
                <p>Pontuação: {props.score}</p>
                <div className="Level-End-Buttons">
                    <button onClick={() => playAgain()}>Jogar novamente</button>
                    <button onClick={() => history.replace('/levels')}>Sair</button>
                </div>
            </div>
        </div>
    );
}

export default LevelEnd;
