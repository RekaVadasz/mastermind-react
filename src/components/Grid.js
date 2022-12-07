import React from 'react';
import Row from './Row';

export default function Grid({ currentGuess, guesses, turn, handleSlotClick, checkGuess, feedbacks, showPicker, handlePickerClick }) {
    return (
        <div className='grid'>
            {guesses.map((guess, i) => {
                
                if (i < turn) {
                    return (
                        <Row 
                            key={i} 
                            guess={guess} 
                            feedback={feedbacks[i]} 
                            className='inactive'
                        />
                    )
                }
                
                if (i === turn) {
                    return (
                        <Row 
                            key= {i} 
                            currentGuess={currentGuess} 
                            handleSlotClick={handleSlotClick} 
                            checkGuess={checkGuess}
                            showPicker={showPicker}
                            handlePickerClick={handlePickerClick}

                        />
                    )
                }

                return <Row key={i} guess={guess} className='inactive'/>
            })}
        </div>
    )
}
