import Button from "../button/Button";
import Logo from "../logo/Logo";
import FooterToolbar from "../footer-toolbar/FooterToolbar";
import css from "./GameGoal.module.css";
import { useHistory } from "react-router-dom";

function GameGoal() {
  const history = useHistory();

  return (
    <div className={css.gameGoal}>
      <div className={css.gameGoalLogoWrapper}>
        <Logo small />
      </div>

      <h1 className={css.gameGoalTitle}>Finalidade do jogo</h1>

      <div className={css.gameGoalContent}>
        <p>
          Promover o ensino da Segurança do Paciente de maneira inovadora e
          dinâmica.
        </p>
        <p>
          Destina-se a docentes, estudantes e demais profissionais da enfermagem
          que buscam construir e/ou fortalecer conhecimentos sobre Segurança do
          Paciente.
        </p>
      </div>

      <FooterToolbar>
        <Button onClick={() => history.push("/know-more")}>Voltar</Button>
      </FooterToolbar>
    </div>
  );
}

export default GameGoal;
