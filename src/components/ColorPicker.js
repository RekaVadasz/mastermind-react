import React from 'react';
import { COLORS } from '../constants/colors';

export default function ColorPicker({handlePickerClick}) {

    return (
        <div className='picker'>
            {COLORS.map((color, i) => (
                <div 
                    key={i}
                    colorid={color.id}                     
                    style={{backgroundColor: `${color.color}`}}
                    onClick={handlePickerClick}
                ></div>
            ))}
        </div>
    )
}
