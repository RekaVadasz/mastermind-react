const useMastermind = () => {
   
    const getFeedback = (currentGuess, solution) => {
        let guessWithFeedback = currentGuess.map((element) => {
            return {color: element, isCorrect: 'not correct'}
        })

        //check for colors in right position        
        guessWithFeedback.forEach((element, i) => {
            if (element.color === solution[i]) {
                guessWithFeedback[i].isCorrect = 'correct';
                solution[i] = null; //not to check it again
            }
        });

        //check for colors included but not in right position
        guessWithFeedback.forEach((element, i) => {
            if (solution.includes(element.color && element.isCorrect !== 'correct')) {
                guessWithFeedback[i].isCorrect = 'included';
                solution[solution.indexOf(element.color)] = null; //not to check again
            }
        })

        return guessWithFeedback
    }
    
    return {getFeedback}
}

export default useMastermind;