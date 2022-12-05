import { React, useState, useEffect } from 'react';

import Mastermind from "./components/Mastermind";

import { COLORS } from './constants/colors';

function App() {

    const [solution, setSolution] = useState(null);
    console.log(solution)

    useEffect(() => {
        let randomSolution = [];
        for (let i = 0; i < 4; i++) {
            const currentColor = COLORS[Math.floor(Math.random()*COLORS.length)]; // 8 
            randomSolution.push(currentColor)
        };
        setSolution(randomSolution)
    }, [setSolution])

    return (
        <div className="App">
            <h1>Mastermind</h1>
            <div>{COLORS[0].color}</div>
            {solution && <Mastermind solution={solution}/>}
        </div>
    );
}

export default App;
