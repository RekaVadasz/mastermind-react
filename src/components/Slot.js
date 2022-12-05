import { React, useState } from 'react';

export default function Slot({ index, handleSlotClick, style }) {

    const [isClicked, setClicked] = useState(false)

    return (
        <div 
            index={index}
            onClick={handleSlotClick}
            style={style}
        ></div>
    )
}
