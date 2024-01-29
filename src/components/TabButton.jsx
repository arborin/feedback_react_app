import React from 'react'

export default function TabButton({ children, onSelect }) {

    // const handleClick = () => {
    //     myClickFunc()
    // }

    return (
        <li className='mb-4'>
            <button onClick={onSelect} className='btn btn-success'>{children}</button>
        </li>
    )
}
