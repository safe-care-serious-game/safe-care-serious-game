import css from "./LevelToolbar.module.css";

function LevelToolbar(props) {
  return <div className={css.levelToolbar}>{props.children}</div>;
}

export default LevelToolbar;
