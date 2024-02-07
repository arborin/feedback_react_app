import React from 'react'

export default function Player({ name, symbol }) {
    return (
        <div>
            <li>
                <span className="player">
                    <span className="player-name">{name}</span>
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button className="btn btn-sm btn-outline-warning">Edit</button>
            </li>
        </div>
    )
}
