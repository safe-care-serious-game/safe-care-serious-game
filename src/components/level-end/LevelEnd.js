import AudioContext from "../audio-context/AudioContext";
import Button from "../button/Button";
import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import css from "./LevelEnd.module.css";

function LevelEnd(props) {
  const { clickAudio } = useContext(AudioContext);
  const history = useHistory();
  const { gameMode } = useParams();

  function playAgain() {
    history.push(`/${gameMode}/levels`);
    history.goBack();
  }

  return (
    <div className={css.levelEndOverlay}>
      <div className={css.levelEndDialog}>
        <h1 className={css.levelEndHeader}>Fase {props.levelId}</h1>
        <p>Parabéns! Fase concluída!</p>
        <p>
          Pontuação: {props.score} / {props.maxScore}
        </p>
        <div className={css.levelEndButtons}>
          <Button
            className={css.levelEndButton}
            onClick={() => {
              clickAudio.play().catch((err) => {
                // Ignore error
              });
              playAgain();
            }}
          >
            Jogar novamente
          </Button>
          <Button
            className={css.levelEndButton}
            onClick={() => {
              clickAudio.play().catch((err) => {
                // Ignore error
              });
              history.push(`/${gameMode}/levels`);
            }}
          >
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LevelEnd;
