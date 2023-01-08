import css from "./Logo.module.css";

function Logo(props) {
  return (
    <div className={`${css.logo} ${props.small ? css.small : css.default}`}>
      <h1>Safe Care</h1>
      <h2>SERIOUS GAME</h2>
    </div>
  );
}

export default Logo;
