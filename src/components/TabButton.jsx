import React from 'react'

export default function TabButton({ children, myClickFunc }) {

    // const handleClick = () => {
    //     myClickFunc()
    // }

    return (
        <li className='mb-4'>
            <button onClick={myClickFunc} className='btn btn-success'>{children}</button>
        </li>
    )
}
