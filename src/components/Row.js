import React from 'react';
import Slot from './Slot';

export default function Row({ guess, currentGuess, handleSlotClick }) {
    
   
    // if both props undefined, return empty row
    return (
        <div className='row'>
            <div className='slots'>
                {[...Array(4)].map((e, i) => (
                    <Slot 
                        key={i}
                        index={i} 
                        handleSlotClick={handleSlotClick}
                    />
                ))}
            </div>
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
