import css from "./LevelOptions.module.css";

function LevelOptions(props) {
  const shouldRenderAdditionalHeader = () =>
    props.dialogue && props.levelSubject;

  return (
    <div className={css.levelOptions}>
      {shouldRenderAdditionalHeader() && (
        <h1 className={css.levelOptionsHeader}>
          A conduta "{props.dialogue} é adequada para {props.levelSubject}?
        </h1>
      )}
      <h1 className={css.levelOptionsHeader}>Escolha uma opção:</h1>
      {props.children}
    </div>
  );
}

export default LevelOptions;
