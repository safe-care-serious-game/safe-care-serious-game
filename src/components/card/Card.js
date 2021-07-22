import './Card.css';

function Card(props) {

    let cardImageStyle = {
        backgroundImage: `url(${props.image ? props.image : ''})`
    }

    return (
        <div className="Card">
            <div className="Card-Image" style={cardImageStyle}></div>
            <div className="Card-Title">{props.title}</div>
        </div>
    );
}

export default Card;
