import './LevelToolbar.css';

function LevelToolbar(props) {
  return (
    <div className="Level-Toolbar">
      {props.children}
    </div>
  );
}

export default LevelToolbar;
