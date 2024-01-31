import React from 'react'

export default function TabButton({ children, onSelect, isSelected }) {

    // const handleClick = () => {
    //     myClickFunc()
    // }

    return (
        <li className='mb-4'>
            <button onClick={onSelect} className={isSelected ? "btn btn-success" : 'btn'}>{children}</button>
        </li>
    )
}
