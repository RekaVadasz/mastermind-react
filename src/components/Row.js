import React from 'react';
import Slots from './Slots';

export default function Row({ guess, currentGuess, handleSlotClick, className, checkGuess, feedback }) {
    
    let feedbackArray = [...Array(4)]
    if (feedback) {
        console.log(feedback)
        feedbackArray = feedback.map((element) => (element.isCorrect)).sort()
        console.log(feedbackArray)
    }
    // if both props undefined, return empty row
    return (
        <div className={`row ${className}`}>
            <Slots 
                handleSlotClick={handleSlotClick} 
                currentGuess={currentGuess} 
                guess={guess}
            />

            <button onClick={checkGuess}>check</button>

            <div className='evaluation'>
                {feedbackArray.map((element, i) => {
                    
                    if (element === 'correct') {
                        return (<div className='correct'></div>)
                    }
                    if (element === 'included') {
                        return (<div className='included'></div>)
                    }
                    return (<div></div>)

                })}
            </div>
        </div>
    )
}
