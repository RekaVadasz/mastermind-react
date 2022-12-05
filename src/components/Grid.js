import React from 'react';
import Row from './Row';

export default function Grid({ currentGuess, guesses, turn, handleSlotClick }) {
    return (
        <div className='grid'>
            {guesses.map((guess, i) => {
                if (turn === i) {
                    return (
                        <Row 
                            key= {i} 
                            currentGuess={currentGuess} 
                            handleSlotClick={handleSlotClick} 
                        />
                    )
                }
                return <Row key={i} guess={guess} className='inactive'/>
            })}
        </div>
    )
}
