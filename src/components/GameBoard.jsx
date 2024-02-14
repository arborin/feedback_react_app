import React from 'react'

const initialGameBoard = [
    [null, null, 'o'],
    [null, "x", 'o'],
    [null, "x", 'o'],
]

export default function GameBoard() {
    return (
        <ul id='game-board'>

            {initialGameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ul>
                        {row.map((playerSymbol, colIndex) => <li style={{ display: 'inline-block', marginRight: '20px', width: "50px", height: "50px", backgroundColor: "#dedede", }} key={colIndex}>{playerSymbol}</li>)}
                    </ul>
                </li>
            })}
        </ul>
    )
}
