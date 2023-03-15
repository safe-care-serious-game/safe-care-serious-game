import AudioContext from "../audio-context/AudioContext";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Card from "../card/Card";
import FooterToolbar from "../footer-toolbar/FooterToolbar";
import css from "./KnowMore.module.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

function KnowMore() {
  const { clickAudio } = useContext(AudioContext);
  const history = useHistory();

  const option = (image, title, onClick) => {
    return (
      <div className={css.knowMoreListCard}>
        <Card image={image} title={title} onClick={onClick} />
      </div>
    );
  };

  return (
    <div className={css.knowMore}>
      <div className={css.knowMoreLogoWrapper}>
        <Logo small />
      </div>

      <h1 className={css.knowMoreTitle}>Saiba mais</h1>

      <div className={css.knowMoreList}>
        {option(null, "Finalidade e público-alvo do jogo", () =>
          history.push(`/game-goal`)
        )}
        {option(null, "Materiais de suporte", () =>
          history.push(`/supporting-materials`)
        )}
      </div>

      <FooterToolbar>
        <Button
          onClick={() => {
            clickAudio.play();
            history.push("/menu");
          }}
        >
          Voltar
        </Button>
      </FooterToolbar>
    </div>
  );
}

export default KnowMore;
