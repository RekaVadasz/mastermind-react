const useMastermind = () => {

    /**
     * Check if each color of the current guess of the user equals with ones in the solution
     * @param {Array} currentGuess The ids of 4 colors chosen by user
     * @param {Array} solution The ids and hex codes of 4 colors of the solution
     * @return {Array} Each color of the guess with an evaluation: 'correct'/'included'/'not correct'
    */ 
    const getFeedback = (currentGuess, solution) => {

        //create an array of only the color ids
        let solutionArray = solution.map((element) => (element.id));
          
        // create array with all colors of the guess, all set to 'not correct'
        let guessWithFeedback = currentGuess.map((element) => {
            return {color: element, isCorrect: 'not correct'}
        });
            
        //check for colors in right position and update guessWithFeedback accordingly       
        guessWithFeedback.forEach((element, i) => {
            if (element.color === solutionArray[i]) {
                guessWithFeedback[i].isCorrect = 'correct';
                solutionArray[i] = null; // set to null not to check it again
            }
        });

        //check for colors included but not in right position and update guessWithFeedback accordingly
        guessWithFeedback.forEach((element, i) => {
            if (solutionArray.includes(element.color) && element.isCorrect !== 'correct') {
                guessWithFeedback[i].isCorrect = 'included';
                solutionArray[solutionArray.indexOf(element.color)] = null; //set to null not to check it again
            }
        });

        return guessWithFeedback
    }
    
    return {getFeedback}
}

export default useMastermind;