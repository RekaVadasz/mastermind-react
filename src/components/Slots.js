import React from 'react';
import Slot from './Slot';
import { COLORS } from '../constants/colors';



export default function Slots({handleSlotClick, currentGuess}) {


    if (currentGuess) {
        return (
            <div className='slots'>
                {currentGuess.map((color, i) => {

                    if (color) {
                        const backgroundColor = COLORS.find(element => element.id === color).color
                        console.log(backgroundColor)
                        return (
                            <Slot 
                                key={i}
                                index={i} 
                                style={{backgroundColor: `${backgroundColor}`}} 
                                handleSlotClick={handleSlotClick}
                            />
                        )
                    }

                    return (
                        <Slot 
                            key={i}
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
            {[...Array(4)].map((i) => 
                <Slot key={i} />
            )}
        </div>
    )


}
