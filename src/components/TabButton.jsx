import React from 'react'

export default function TabButton(props) {
    return (
        <li>
            <button className='btn'>{props.children}</button>
        </li>
    )
}
