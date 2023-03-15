import AudioContext from "../audio-context/AudioContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../logo/Logo";
import css from "./SplashScreen.module.css";

function SplashScreen() {
  const { clickAudio } = useContext(AudioContext);
  const history = useHistory();

  return (
    <div
      className={css.splashScreen}
      onClick={() => {
        clickAudio.play();
        history.replace("/menu");
      }}
    >
      <div className={css.splashScreenLogoWrapper}>
        <Logo />
      </div>
      <h1 className={css.splashScreenPressToStart}>Clique para começar</h1>
    </div>
  );
}

export default SplashScreen;
