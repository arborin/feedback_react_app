import { useRef, useState, useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import './index.css'

export default function App() {


    const [dice, setDice] = useState(() => generateRandomNumbers())

    const newButton = useRef()

    function generateRandomNumbers() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            const number = { value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() }
            newDice.push(number)
        }

        return newDice;
    }


    const hold = (id) => {
        const newDice = dice.map((item) => {
            if (id === item.id) {
                item.isHeld = !item.isHeld
            }
            return item;
        })
        setDice(newDice)

    }

    let winner = false
    if (dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)) {
        winner = true

    }

    useEffect(() => {
        if (newButton.current) {
            newButton.current.focus();
        }
    }, [winner]);

    const newGame = () => {
        setDice(generateRandomNumbers())
    }






    const diceElements = dice.map((item, index) => {
        return <Die value={item.value} hold={() => hold(item.id)} key={item.id} id={item.id} isHeld={item.isHeld} />
    })

    function rollDice() {
        const newDice = dice.map((item) => {
            if (!item.isHeld) {
                item.value = Math.ceil(Math.random() * 6)
            }
            return item;
        })
        setDice(newDice)
    }




    return (
        <main>
            {winner && <Confetti />}
            <h1>My APP {winner && 'Winner!'}</h1>
            <div className='dice-container'>

                {diceElements}

            </div>
            <div>
                {winner ? <button onClick={newGame} ref={newButton}>New Game</button> : <button onClick={rollDice}>Roll</button>}
            </div>

        </main>
    )
}


