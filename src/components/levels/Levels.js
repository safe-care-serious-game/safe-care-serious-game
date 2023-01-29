import Button from "../button/Button";
import Logo from "../logo/Logo";
import Card from "../card/Card";
import FooterToolbar from "../footer-toolbar/FooterToolbar";
import css from "./Levels.module.css";
import Level1 from "../../images/Level1.jpg";
import Level2 from "../../images/Level2.jpg";
import Level3 from "../../images/Level3.jpg";
import Level4 from "../../images/Level4.jpg";
import Level5 from "../../images/Level5.jpg";
import Level6 from "../../images/Level6.jpg";
import { useHistory, useParams } from "react-router-dom";

function Levels() {
  const history = useHistory();
  const { gameMode } = useParams();

  const level = (image, title, onClick) => {
    return (
      <div className={css.levelsListCard}>
        <Card image={image} title={title} onClick={onClick} />
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
        {level(Level1, "Identificação do Paciente")}
        {level(Level2, "Cirurgia Segura")}
        {level(Level3, "Segurança na administração de mediacamentos")}
        {level(Level4, "Prevenção de Lesão por pressão", () =>
          history.push(`/${gameMode}/levels/4`)
        )}
        {level(Level5, "Prevenção de Quedas")}
        {level(Level6, "Higienização das mãos")}
      </div>

      <FooterToolbar>
        <Button onClick={() => history.push("/game-mode")}>Voltar</Button>
        <Button>Login</Button>
      </FooterToolbar>
    </div>
  );
}

export default Levels;
