import React, { Component } from 'react'
import "./item-add-form.css"

export default class ItemAddForm extends Component {



    render() {
        const { addItem } = this.props

        return (
            <div className='item-add-form'>
                <button onClick={() => addItem("NEW ITEM")} className='btn btn-primary'>ADD</button>
            </div>
        )
    }
}
