import { React, useState, useEffect } from 'react';
import { COLORS } from './constants/colors';

import Board from "./components/Board";

function App() {

    const [solution, setSolution] = useState(null);

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
            {solution && <Board solution={solution}/>}
        </div>
    );
}

export default App;
