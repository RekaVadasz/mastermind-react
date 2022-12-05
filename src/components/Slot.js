import { React, useState } from 'react';

export default function Slot({ index, handleSlotClick }) {

    const [isClicked, setClicked] = useState(false)

    return (
        <div 
            index={index}
            onClick={handleSlotClick}
        ></div>
    )
}
