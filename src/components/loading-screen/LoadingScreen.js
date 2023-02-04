import Logo from "../logo/Logo";
import css from "./LoadingScreen.module.css";

function LoadingScreen(props) {
  return (
    <div className={css.loadingScreen}>
      <div className={css.loadingScreenLogoWrapper}>
        <Logo />
      </div>
      <p className={css.loadingScreenText}>
        Carregando...
        <br />
        {props.progress}
      </p>
    </div>
  );
}

export default LoadingScreen;
