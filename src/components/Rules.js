import React from 'react';

export default function Rules ({ handleClick }) {
    return (
        <div className='rules'>
            <div>
                <i class='bx bx-x' onClick={handleClick}></i>
                <h2>Game Rules</h2>
                <p>As a Codebreaker, your goal is to find out the secret code of 4 colors in not more than 10 turns.</p>
                <p>The code is an arbitrary combination of 8 colors (colors can occur more than once).</p>
                <h3>How to play</h3>
                <p>From top to bottom, at each row, click on a circle and pick a color. After filling all circles in a row, you can check your guess.</p>
                <p>A white peg means the color and the position is correct.</p>
                <p>A black peg means that the color exists in the combination but the position is not correct.</p>
            </div>
        </div>
    )
};