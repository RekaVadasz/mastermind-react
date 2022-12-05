import { React, useState } from 'react';
import ColorPicker from './ColorPicker';
import Grid from './Grid';

import { COLORS } from '../constants/colors';

export default function Board({ solution }) {

    const [showPicker, setShowPicker] = useState(false)
    const [showModal, setShowModal] = useState(false);
    
    const [currentSlot, setCurrentSlot] = useState(null); //the slot where the user chooses a color
  

    const [turn, setTurn] = useState(0); //max 10
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(10)]) // each guess is an array of colors
    const [isCorrect, setIsCorrect] = useState(false) //if true: finish game, win


    //choose slot to insert a color from picker (show picker)
    const handleSlotClick = (e) => {
        setShowPicker(true);
        setCurrentSlot(e.target.getAttribute('index'))
        console.log('current slot:', e.target.getAttribute('index'))

    }

    // handle user color input, save current guess
    // if check button clicked, check inputs against solution
    const handlePickerClick = (e) => {
        console.log('chosen color:', e.target.getAttribute('colorId'))
        setShowPicker(false)
    }
    

    return (
        <section>
            <div className='solution'> 
                solution: 
                {solution.map((color, i) => (
                    <div key={i}>{color.id}</div>
                ))}
            </div>
            <Grid handleSlotClick={handleSlotClick}/>
            {showPicker && <ColorPicker handlePickerClick={handlePickerClick}/>}
        </section>
    )
}
