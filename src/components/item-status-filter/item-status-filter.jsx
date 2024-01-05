import React from 'react'

// export default function ItemStatusFilter() {
//     return (
//         <div className='btn-group'>
//             <button type='button' className='btn btn-info'>ALL</button>
//             <button type='button' className='btn btn-outline-info'>Active</button>
//             <button type='button' className='btn btn-outline-info'>Done</button>
//         </div>
//     )
// }


class ItemStatusFilter extends React.Component {
    render() {
        return (<div className='btn-group'>
            <button type='button' className='btn btn-info'>ALL</button>
            <button type='button' className='btn btn-outline-info'>Active</button>
            <button type='button' className='btn btn-outline-info'>Done</button>
        </div>
        )
    }
}

export default ItemStatusFilter