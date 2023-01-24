import './card.css';
import './flipTransition.css';

function Card({onClick}) {
    return (
        <div className='card' onMouseEnter={onClick} onMouseLeave={onClick}>
            <div className='card-back'>Back</div>
            <div className='card-front'>Front</div>
        </div>
    )
}

export default Card;