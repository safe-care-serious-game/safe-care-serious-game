import './Card.css';

function Card(props) {

    let onClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    let cardImageStyle = {
        backgroundImage: `url(${props.image ? props.image : ''})`
    }

    return (
        <div className="Card" onClick={onClick}>
            <div className="Card-Image" style={cardImageStyle}></div>
            <div className="Card-Title">{props.title}</div>
        </div>
    );
}

export default Card;
