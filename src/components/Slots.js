import React from 'react';
import Slot from './Slot';
import { COLORS } from '../constants/colors';



export default function Slots({handleSlotClick, currentGuess, guess}) {

    if (guess) {
        return (
            <div className='slots'>
                {guess.map((color, i) => {
                    const backgroundColor = COLORS.find(element => element.id === color).color 
                    return (
                        <Slot 
                            key={`slot${i}`}
                            index={i} 
                            style={{
                                backgroundColor: `${backgroundColor}`,
                                backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255, 255, 255, 0.123), rgba(0, 0, 0, 0.123)'
                            }} 
                        />
                    )
                })}
            </div>
        )
    }

    if (currentGuess) {
        return (
            <div className='slots'>
                {currentGuess.map((color, i) => {

                    if (color) {
                        const backgroundColor = COLORS.find(element => element.id === color).color
                        return (
                            <Slot 
                                key={`slot${i}`}
                                index={i} 
                                style={{
                                    backgroundColor: `${backgroundColor}`,
                                    backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255, 255, 255, 0.123), rgba(0, 0, 0, 0.123)'
                                }} 
                                handleSlotClick={handleSlotClick}
                            />
                        )
                    }

                    return (
                        <Slot 
                            key={`slot${i}`}
                            index={i} 
                            handleSlotClick={handleSlotClick}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <div className='slots'>
            {[...Array(4)].map((e, i) => 
               <Slot key={`slot${i}`} />
            )}
        </div>
    )


}
