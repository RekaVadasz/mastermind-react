import React from 'react';
import ColorPicker from './ColorPicker';
import Slots from './Slots';

export default function Row({ guess, currentGuess, handleSlotClick, className, checkGuess, feedback, showPicker, handlePickerClick }) {
    
    //create empty array and if feedback available, fill it up with the evalution then sort elements alphabetically
    let feedbackArray = [...Array(4)]
    if (feedback) {
        feedbackArray = feedback.map((element) => (element.isCorrect)).sort()
    }

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

            <button onClick={checkGuess}><i className='bx bx-check'></i></button>
            {showPicker && <ColorPicker handlePickerClick={handlePickerClick}/>}
        </div>
    )
}
