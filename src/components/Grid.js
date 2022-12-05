import React from 'react';
import Row from './Row';

export default function Grid({ currentGuess, guesses, turn, handleSlotClick }) {
    return (
        <div className='grid'>
            <Row handleSlotClick={handleSlotClick}/>
        </div>
    )
}
