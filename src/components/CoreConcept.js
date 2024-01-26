import React from 'react'

export default function CoreConcepts({ title, hours }) {
    return (
        <li>
            <p>{title}</p>
            <p>time: {hours} h</p>
        </li>
    )
}

