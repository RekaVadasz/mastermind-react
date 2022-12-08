import { React, useState } from 'react';
import Grid from './Grid';
import Modal from './Modal';

import useMastermind from '../hooks/useMastermind';
import Alert from './Alert';

export default function Board({ solution }) {

    const { getFeedback } = useMastermind();

    // - - - - STATES - - - - 

    const [showPicker, setShowPicker] = useState(false); //show ColorPicker component
    const [showModal, setShowModal] = useState(false); // show Modal in case of winning/losing the game
    const [showAlert, setShowAlert] = useState(false); // show Alert for filling in all the slots
    
    const [turn, setTurn] = useState(0); //max 10 turns in the game
    const [currentSlot, setCurrentSlot] = useState(null); //the slot for which the color is chosen (0/1/2/3)
    const [currentGuess, setCurrentGuess] = useState([...Array(4)]); //array of 4 colors
    const [guesses, setGuesses] = useState([...Array(10)]) // all past guesses, each guess is an array of colors
    const [feedbacks, setFeedbacks] = useState([...Array(10)]) //all past feedbacks on guesses
    const [isCorrect, setIsCorrect] = useState(false) //if true: finish game, user wins

    // - - - LOGIC - - - - 

    // show ColorPicker and choose slot to insert a color into
    const handleSlotClick = (e) => {
        setShowPicker(true);
        setCurrentSlot(parseInt(e.target.getAttribute('index'), 10)); 
    }

    // handle user color input from ColorPicker, save color into currentGuess at right position
    const handlePickerClick = (e) => {
        setShowPicker(false);
        const nextGuess = currentGuess.map((guess, i) => {
            if (i === currentSlot) {
                return parseInt(e.target.getAttribute('colorid'), 10)
            } else {
                return guess
            }
        });
        setCurrentGuess(nextGuess);
    }
    
    // if 'check' button clicked, check inputs against solution
    const checkGuess = () => {

        //check if all slots are filled with color, if not, alert user
        if (currentGuess.includes(undefined)) {
            setShowAlert(true);
            setTimeout(() => {setShowAlert(false)}, 2000)
            return
        }

        //check if solution is correct
        const solutionArray = solution.map((element) => element.id)
        if (JSON.stringify(currentGuess) === JSON.stringify(solutionArray)) {
            setIsCorrect(true) //win the game
            setShowModal(true)
            return
        }
        
        // check is this was the last turn, if so, user looses the game
        if (turn === 9 ) { 
            setShowModal(true)
            return
        };

        // evaluate guess and save it into feedback history
        const newFeedback = getFeedback(currentGuess, solution);
        setFeedbacks((prevFeedbacks) => {
            let newFeedbacks = [...prevFeedbacks];
            newFeedbacks[turn] = newFeedback;
            return newFeedbacks
        }) 

        //save guees in guesses history
        setGuesses((prevGuesses) => { 
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = currentGuess;
            return newGuesses
        });

        // track turn
        setTurn((prevTurn) => { 
            return prevTurn + 1
        });

        // empty currentGuess
        setCurrentGuess([...Array(4)]); 
    }

    return (
        <div className='board'>
            <Grid 
                handleSlotClick={handleSlotClick}
                currentGuess={currentGuess}
                guesses={guesses}
                turn={turn}
                checkGuess={checkGuess}
                feedbacks={feedbacks}
                showPicker={showPicker}
                handlePickerClick={handlePickerClick}
            />
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
            {showAlert && <Alert />}
        </div>
    )
}