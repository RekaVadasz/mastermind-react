import { React, useState, useEffect } from 'react';

import { COLORS } from './constants/colors';
import Board from "./components/Board";

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
        <>
            <header>
                <div>Mastermind</div>
                {/* {solution && <div className='solution'> 
                    solution: 
                        {solution.map((color, i) => (
                            <div key={i}>{color.id}</div>
                        ))}
                </div>} */}
                <div className='header-buttons'>
                    <i className='bx bx-info-circle'></i>
                    <button onClick={() => {window.location.reload(false)}}>New Game</button>
                </div>
            </header>
            {solution && <Board solution={solution}/>}
            <div className='mobile-menu'>
                <i className='bx bx-info-circle'></i>
                <i class='bx bx-revision'></i>
            </div>
        </>
    );
}

export default App;
