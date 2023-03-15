import AudioContext from "../audio-context/AudioContext";
import Logo from "../logo/Logo";
import Card from "../card/Card";
import css from "./MainMenu.module.css";
import Play from "../../images/Play.jpg";
import KnowMore from "../../images/KnowMore.jpg";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

function MainMenu() {
  const { menuMusic } = useContext(AudioContext);
  const history = useHistory();

  useEffect(() => {
    const loopEventListener = () => {
      menuMusic.currentTime = 0;
      menuMusic.play();
    };
    menuMusic.addEventListener("ended", loopEventListener);
    menuMusic.play();
  }, [menuMusic]);

  useEffect(() => {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen().catch((err) => {
        // Ignore error
      });
    }
  }, []);

  return (
    <div className={css.mainMenu}>
      <div className={css.mainMenuLogoWrapper}>
        <Logo small />
      </div>
      <div className={css.mainMenuOptions}>
        <Card
          image={Play}
          title="Jogar"
          onClick={() => history.push("/game-mode")}
        />
        <Card
          image={KnowMore}
          title="Saiba Mais"
          onClick={() => history.push("/know-more")}
        />
      </div>
    </div>
  );
}

export default MainMenu;
