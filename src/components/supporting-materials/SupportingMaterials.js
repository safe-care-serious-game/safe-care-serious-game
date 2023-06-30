import AudioContext from "../audio-context/AudioContext";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import FooterToolbar from "../footer-toolbar/FooterToolbar";
import css from "./SupportingMaterials.module.css";
import supportingMaterials from "../../data/supportingMaterials";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

function SupportingMaterials() {
  const { clickAudio } = useContext(AudioContext);
  const history = useHistory();

  return (
    <div className={css.supportingMaterials}>
      <div className={css.supportingMaterialsLogoWrapper}>
        <Logo small />
      </div>

      <h1 className={css.supportingMaterialsTitle}>Materiais de suporte</h1>

      <div className={css.supportingMaterialsList}>
        <ul>
          {supportingMaterials.map((material) => (
            <li key={material.id}>
              {material.institution}
              <b>{material.title}</b>
              {material.content}
              {material.link ? (
                <>
                  {"Disponível em: "}
                  <a href={material.link}>{material.link}</a>
                  {"."}
                </>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      <FooterToolbar>
        <Button
          onClick={() => {
            clickAudio.play().catch((err) => {
              // Ignore error
            });
            history.push("/know-more");
          }}
        >
          Voltar
        </Button>
      </FooterToolbar>
    </div>
  );
}

export default SupportingMaterials;
