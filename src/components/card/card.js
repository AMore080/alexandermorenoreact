import './card.css';
import './flipTransition.css';
import '../../index.css'


function Card({onClick, backgroundImage, projectTitle, liveDemoLink, gitHubLink, description}) {
    return (
        <div className='card' onClick={onClick}>
            <div className='card-back'>
                <h1 className='flex flex-wrap text-xs md:text-md lg:text-md xl:text-md 2xl:text-lg font-bold text-white gap-1 w-full'>
                {description}
                <br></br>
                <br></br>
                 <a class="w-full" href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                    <button onClick={(e) => {e.stopPropagation();}} class="w-full py-2 px-1 rounded-md text-sm bg-black">
                        Live Demo
                    </button>
                 </a>
                 <a class="w-full" href={gitHubLink} target="_blank" rel="noopener noreferrer">
                    <button onClick={(e) => {e.stopPropagation();}} class="w-full py-2 px-1 rounded-md text-sm bg-black">GitHub Repo</button>
                </a>
                </h1>
            </div>
            <div className={`text-3xl font-bold bg-cover
             text-white card-front`} style={{backgroundImage: `url(${backgroundImage})`}}>
                    {projectTitle}
            </div>
        </div>
    )
}

export default Card;