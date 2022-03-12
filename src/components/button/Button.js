import css from './Button.module.css';

function Button(props) {
  return (
    <button className={`${css.button} ${props.className}`} onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  );
}

export default Button;
