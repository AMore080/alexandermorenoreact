import './flip-card.css'
import Card from './card/card';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import '../index.css'

function FlippableCard({backgroundImage, projectTitle}) {
    const [showFront, setShowFront] = useState(true);
    // const background
    console.log(backgroundImage)

    return (
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card onClick={() => {
                    setShowFront((v) => !v);
                }} backgroundImage={backgroundImage} projectTitle={projectTitle} />
            </CSSTransition>
        </div>
    )
}

export default FlippableCard;