import React from 'react'
import { useState } from 'react'

export default function Player({ initialName, symbol }) {

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialName)

    let player = <span className="player-name">{name}</span>
    let button = <button className="btn btn-sm btn-outline-warning" onClick={() => setIsEditing(true)}>Edit</button>

    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    if (isEditing) {
        player = <input class="form-control form-control-sm" type="text" value={name} onChange={handleNameInput} />
        button = <button className="btn btn-sm btn-outline-success" onClick={() => setIsEditing(false)}>Save</button>
    }
    return (
        <div>
            <li>
                <span className="player">
                    {player}

                    <span className="player-symbol">{symbol}</span>
                </span>
                {button}
            </li>
        </div>
    )
}
