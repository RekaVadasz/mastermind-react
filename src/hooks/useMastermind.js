const useMastermind = () => {
   
    const getFeedback = (currentGuess, solution) => {

        let solutionArray = solution.map((element) => (
            element.id
            ))
            console.log('solution:', solutionArray)
            
            let guessWithFeedback = currentGuess.map((element) => {
                return {color: element, isCorrect: 'not correct'}
            })
        console.log('current guess array: ', guessWithFeedback)
            
        //check for colors in right position        
        guessWithFeedback.forEach((element, i) => {
            if (element.color === solutionArray[i]) {
                guessWithFeedback[i].isCorrect = 'correct';
                solutionArray[i] = null; //not to check it again
            }
        });

        //check for colors included but not in right position
        guessWithFeedback.forEach((element, i) => {
            if (solutionArray.includes(element.color) && element.isCorrect !== 'correct') {
                guessWithFeedback[i].isCorrect = 'included';
                solutionArray[solutionArray.indexOf(element.color)] = null; //not to check again
            }
        })

        console.log('feedback:', guessWithFeedback)
        return guessWithFeedback
    }
    
    return {getFeedback}
}

export default useMastermind;