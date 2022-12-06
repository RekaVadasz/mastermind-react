import { React, useState } from 'react';
import ColorPicker from './ColorPicker';
import Grid from './Grid';

import { COLORS } from '../constants/colors';
import useMastermind from '../hooks/useMastermind';


export default function Board({ solution }) {

    const { getFeedback } = useMastermind();


    // - - - - STATES - - - - 

    const [showPicker, setShowPicker] = useState(false)
    const [showModal, setShowModal] = useState(false);
    
    const [currentSlot, setCurrentSlot] = useState(null); //the slot where the user chooses a color
    //console.log('current slot:', currentSlot)
    const [turn, setTurn] = useState(0); //max 10
    console.log('turn: ', turn)
    const [currentGuess, setCurrentGuess] = useState([...Array(4)]); //empty array of 4 elements
    //console.log('current guees:', currentGuess)
    const [feedbacks, setFeedbacks] = useState([...Array(10)])
    const [guesses, setGuesses] = useState([...Array(10)]) // each guess is an array of colors
    //console.log('guesses', guesses)
    const [isCorrect, setIsCorrect] = useState(false) //if true: finish game, win


    // - - - LOGIC - - - - 

    //choose slot to insert a color from picker (show picker)
    const handleSlotClick = (e) => {
        setShowPicker(true);
        setCurrentSlot(parseInt(e.target.getAttribute('index'), 10) ) 
    }

    // handle user color input, save color into current guess at right position
    const handlePickerClick = (e) => {
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
    const checkGuess = () => {
        //check if all slots are filled with color
        if (currentGuess.includes(undefined)) {
            console.log("please fill in all slots with color")
            return
        }

        //check if solution is correct
        const solutionArray = solution.map((element) => element.id)
        if (JSON.stringify(currentGuess) === JSON.stringify(solutionArray)) {
            setIsCorrect(true) //win the game
            console.log("you won")
            return
        }
        
        //otherwise evaluate guess, save it and track turn
        console.log('not correct')
        const newFeedback = getFeedback(currentGuess, solution);
        setFeedbacks((prevFeedbacks) => {
            let newFeedbacks = [...prevFeedbacks];
            newFeedbacks[turn] = newFeedback;
            return newFeedbacks
        }) 




        if (turn === 9 ) {
            console.log('Could not break the code, try new game')
            return
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = currentGuess;
            return newGuesses
        })

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setCurrentGuess([...Array(4)])


    }

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
                checkGuess={checkGuess}
                feedbacks={feedbacks}
            />
            {showPicker && <ColorPicker handlePickerClick={handlePickerClick}/>}
        </section>
    )
}
