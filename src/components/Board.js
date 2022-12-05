import { React, useState } from 'react';
import ColorPicker from './ColorPicker';
import Grid from './Grid';

import { COLORS } from '../constants/colors';

export default function Board({ solution }) {

    const [showPicker, setShowPicker] = useState(false)
    const [showModal, setShowModal] = useState(false);
    
    const [currentSlot, setCurrentSlot] = useState(null); //the slot where the user chooses a color
    console.log('current slot:', currentSlot)

    const [turn, setTurn] = useState(0); //max 10
    const [currentGuess, setCurrentGuess] = useState([...Array(4)]); //empty array of 4 elements
    console.log('current guees:', currentGuess)

    const [guesses, setGuesses] = useState([...Array(10)]) // each guess is an array of colors
    const [isCorrect, setIsCorrect] = useState(false) //if true: finish game, win


    //choose slot to insert a color from picker (show picker)
    const handleSlotClick = (e) => {
        setShowPicker(true);
        setCurrentSlot(parseInt(e.target.getAttribute('index'), 10) ) 
    }

    // handle user color input, save into current guess at right position
    const handlePickerClick = (e) => {
        console.log('chosen color:', e.target.getAttribute('colorid')); //string 
        setShowPicker(false);
        const nextGuess = currentGuess.map((guess, i) => {
            if (i === currentSlot) {
                return parseInt(e.target.getAttribute('colorid'), 10)
            } else {
                return guess
            }
        })
        setCurrentGuess(nextGuess)
    }
    
    // if check button clicked, check inputs against solution

    return (
        <section>
            <div className='solution'> 
                solution: 
                {solution.map((color, i) => (
                    <div key={i}>{color.id}</div>
                ))}
            </div>
            <Grid 
                handleSlotClick={handleSlotClick}
                currentGuess={currentGuess}
                guesses={guesses}
                turn={turn}
            />
            {showPicker && <ColorPicker handlePickerClick={handlePickerClick}/>}
        </section>
    )
}
