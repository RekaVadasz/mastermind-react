import { React, useState } from 'react';
import Grid from './Grid';
import Modal from './Modal';

import useMastermind from '../hooks/useMastermind';

export default function Board({ solution }) {

    const { getFeedback } = useMastermind();

    // - - - - STATES - - - - 

    const [showPicker, setShowPicker] = useState(false)
    const [showModal, setShowModal] = useState(false);
    
    const [turn, setTurn] = useState(0); //max 10
    const [currentSlot, setCurrentSlot] = useState(null); //the slot where the user chooses a color
    const [currentGuess, setCurrentGuess] = useState([...Array(4)]); //empty array of 4 elements
    const [guesses, setGuesses] = useState([...Array(10)]) // each guess is an array of colors
    const [feedbacks, setFeedbacks] = useState([...Array(10)])
    const [isCorrect, setIsCorrect] = useState(false) //if true: finish game, win


    // - - - LOGIC - - - - 

    //choose slot to insert a color from picker (show picker)
    const handleSlotClick = (e) => {
        setShowPicker(true);
        setCurrentSlot(parseInt(e.target.getAttribute('index'), 10)); 
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
        });
        setCurrentGuess(nextGuess);
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
            setShowModal(true)
            return
        }
        
        //otherwise evaluate guess, save it and track turn
        const newFeedback = getFeedback(currentGuess, solution);
        setFeedbacks((prevFeedbacks) => {
            let newFeedbacks = [...prevFeedbacks];
            newFeedbacks[turn] = newFeedback;
            return newFeedbacks
        }) 

        if (turn === 9 ) {
            setShowModal(true)
            return
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = currentGuess;
            return newGuesses
        });

        setTurn((prevTurn) => {
            return prevTurn + 1
        });

        setCurrentGuess([...Array(4)]);
    }

    return (
        <section>

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
        </section>
    )
}
