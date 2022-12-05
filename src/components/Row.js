import React from 'react';
import Slots from './Slots';

export default function Row({ guess, currentGuess, handleSlotClick, className }) {
   
    // if both props undefined, return empty row
    return (
        <div className={`row ${className}`}>
            <Slots handleSlotClick={handleSlotClick} currentGuess={currentGuess}/>

            <button>check</button>

            <div className='evaluation'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
