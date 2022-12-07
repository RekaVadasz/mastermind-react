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
        <>
            <header>
                <div>Mastermind</div>
                <div className='solution'> 
                    solution: 
                        {solution.map((color, i) => (
                            <div key={i}>{color.id}</div>
                        ))}
                </div>
                <button onClick={() => {window.location.reload(false)}}>New Game</button>
            </header>
            {solution && <Board solution={solution}/>}
        </>
    );
}

export default App;
