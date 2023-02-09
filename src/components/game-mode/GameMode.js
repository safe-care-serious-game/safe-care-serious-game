import Logo from "../logo/Logo";
import Card from "../card/Card";
import Button from "../button/Button";
import FooterToolbar from "../footer-toolbar/FooterToolbar";
import css from "./GameMode.module.css";
import SinglePlayer from "../../images/SinglePlayer.jpg";
import MultiPlayer from "../../images/MultiPlayer.jpg";
import { useHistory } from "react-router-dom";

function GameMode() {
  const history = useHistory();

  return (
    <div className={css.gameMode}>
      <div className={css.gameModeLogoWrapper}>
        <Logo small />
      </div>
      <div className={css.gameModeOptions}>
        <Card
          image={SinglePlayer}
          title="Single Player"
          onClick={() => history.push("/single-player/levels")}
        />
        <Card
          image={MultiPlayer}
          title="Multi Player"
          onClick={() => history.push("/multi-player/levels")}
        />
      </div>

      <FooterToolbar>
        <Button onClick={() => history.push("/menu")}>Voltar</Button>
      </FooterToolbar>
    </div>
  );
}

export default GameMode;
