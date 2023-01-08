import css from "./Card.module.css";

function Card(props) {
  let onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  let cardImageStyle = {
    backgroundImage: `url(${props.image ? props.image : ""})`,
  };

  return (
    <div className={css.card} onClick={onClick}>
      <div className={css.cardImage} style={cardImageStyle}></div>
      <div className={css.cardTitle}>{props.title}</div>
    </div>
  );
}

export default Card;
