import AudioContext from "../audio-context/AudioContext";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Card from "../card/Card";
import FooterToolbar from "../footer-toolbar/FooterToolbar";
import PlayerContext from "../player-context/PlayerContext";
import css from "./Levels.module.css";
import Level1 from "../../images/Level1.jpg";
import Level2 from "../../images/Level2.jpg";
import Level3 from "../../images/Level3.jpg";
import Level4 from "../../images/Level4.jpg";
import Level5 from "../../images/Level5.jpg";
import Level6 from "../../images/Level6.jpg";
import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

function Levels() {
  const { clickAudio } = useContext(AudioContext);
  const playerData = useContext(PlayerContext);
  const history = useHistory();
  const { gameMode } = useParams();

  const level = (image, title, highScore, onClick) => {
    return (
      <div className={css.levelsListCard}>
        <Card
          image={image}
          title={title}
          overlay={
            highScore ? (
              <div className={css.levelsHighScoreOverlay}>
                <span className={css.levelsHighScore}>
                  Pontuação: {highScore}
                </span>
              </div>
            ) : null
          }
          onClick={onClick}
        />
      </div>
    );
  };

  return (
    <div className={css.levels}>
      <div className={css.levelsLogoWrapper}>
        <Logo small />
      </div>

      <h1 className={css.levelsTitle}>Fases</h1>

      <div className={css.levelsList}>
        {level(
          Level1,
          "Identificação do Paciente",
          playerData.levels["1"].highScore,
          () => history.push(`/${gameMode}/levels/1`)
        )}
        {level(
          Level2,
          "Cirurgia Segura",
          playerData.levels["2"].highScore,
          () => history.push(`/${gameMode}/levels/2`)
        )}
        {level(
          Level3,
          "Segurança na administração de mediacamentos",
          playerData.levels["3"].highScore,
          () => history.push(`/${gameMode}/levels/3`)
        )}
        {level(
          Level4,
          "Prevenção de Lesão por pressão",
          playerData.levels["4"].highScore,
          () => history.push(`/${gameMode}/levels/4`)
        )}
        {level(
          Level5,
          "Prevenção de Quedas",
          playerData.levels["5"].highScore,
          () => history.push(`/${gameMode}/levels/5`)
        )}
        {level(
          Level6,
          "Higienização das mãos",
          playerData.levels["6"].highScore,
          () => history.push(`/${gameMode}/levels/6`)
        )}
      </div>

      <FooterToolbar>
        <Button
          onClick={() => {
            clickAudio.play().catch((err) => {
              // Ignore error
            });
            history.push("/game-mode");
          }}
        >
          Voltar
        </Button>
        <Button>Login</Button>
      </FooterToolbar>
    </div>
  );
}

export default Levels;
