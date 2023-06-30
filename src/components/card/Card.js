import { useContext } from "react";
import AudioContext from "../audio-context/AudioContext";
import css from "./Card.module.css";

function Card(props) {
  const { clickAudio } = useContext(AudioContext);

  let onClick = () => {
    if (props.onClick) {
      clickAudio.play().catch((err) => {
        // Ignore error
      });
      props.onClick();
    }
  };

  let cardImageStyle = {
    backgroundImage: `url(${props.image ? props.image : ""})`,
  };

  return (
    <div className={css.card} onClick={onClick}>
      <div className={css.cardImage} style={cardImageStyle}>
        {props.overlay ? props.overlay : null}
      </div>
      <div className={css.cardTitle}>{props.title}</div>
    </div>
  );
}

export default Card;
