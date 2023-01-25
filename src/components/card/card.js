import './card.css';
import './flipTransition.css';
import '../../index.css'


function Card({onClick, backgroundImage, projectTitle, liveDemoLink, gitHubLink, description}) {
    return (
        <div className='card' onClick={onClick}>
            <div className='card-back'>
             <h1 className='text-3xl font-bold text-white'>back</h1>
            </div>
            <div className={`text-3xl font-bold bg-cover
             text-white card-front`} style={{backgroundImage: `url(${backgroundImage})`}}>
                    {projectTitle}
            </div>
        </div>
    )
}

export default Card;