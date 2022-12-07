import { React, useState, useEffect } from 'react';

import { COLORS } from './constants/colors';
import Board from "./components/Board";
import Rules from './components/Rules';

function App() {

    const [solution, setSolution] = useState(null);
    const [showRules, setShowRules] = useState(false);

    useEffect(() => {
        let randomSolution = [];
        for (let i = 0; i < 4; i++) {
            const currentColor = COLORS[Math.floor(Math.random()*COLORS.length)]; // 8 
            randomSolution.push(currentColor)
        };
        setSolution(randomSolution)
    }, [setSolution]);

    const handleClick = () => {
        setShowRules(!showRules)
    };

    return (
        <>
            <header>
                <div>Mastermind</div>
                <div className='header-buttons'>
                    <i className='bx bx-info-circle' onClick={handleClick}></i>
                    <button onClick={() => {window.location.reload(false)}}>New Game</button>
                </div>
            </header>

            {solution && <Board solution={solution}/>}

            <div className='mobile-menu'>
                <div><i className='bx bx-info-circle' onClick={handleClick}></i></div>
                <div><i className='bx bx-revision' onClick={() => {window.location.reload(false)}}></i></div>
            </div>

            {showRules && <Rules handleClick={handleClick}/>}
        </>
    );
}

export default App;
