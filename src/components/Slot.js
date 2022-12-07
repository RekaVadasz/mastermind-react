import { React, useState } from 'react';

export default function Slot({ index, handleSlotClick, style }) {


    return (
        <div 
            index={index}
            onClick={handleSlotClick}
            style={style}
        ></div>
    )
}
