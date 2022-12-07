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


            <div className='evaluation'>
                {feedbackArray.map((element, i) => {
                    
                    if (element === 'correct') {
                        return (<div key={i} className='correct'></div>)
                    }
                    if (element === 'included') {
                        return (<div key={i} className='included'></div>)
                    }
                    return (<div key={i}></div>)
                    
                })}
            </div>

            <button onClick={checkGuess}><i class='bx bx-check'></i></button>
        </div>
    )
}
