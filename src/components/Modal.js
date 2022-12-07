import React from 'react';

export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className='modal'>
            <div className='modal-inner'>
                {isCorrect && (
                    <>
                    <h2>Congratulalations, Codebreaker! :)</h2>
                    <p>You found the solution in {turn + 1} guesses.</p>
                    </>
                )}

                {!isCorrect && (
                    <>
                    <h2>You did not manage to brake the code :( </h2>
                    <p>The solution was:</p>
                    </>
                )}

                <div className='solution-slots'>
                    {solution.map((element, i) => (
                        <div
                            key={i}
                            style={{backgroundColor: `${element.color}`}}
                        ></div>
                    ))}
                </div>
                <button onClick={() => {window.location.reload(false)}}>New game</button>
            </div>
        </div>
    )
};