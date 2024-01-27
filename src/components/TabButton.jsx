import React from 'react'

export default function TabButton({ children }) {

    const handleClick = () => {
        console.log("CLICK!")
    }

    return (
        <li className='mb-4'>
            <button onClick={handleClick} className='btn btn-success'>{children}</button>
        </li>
    )
}
