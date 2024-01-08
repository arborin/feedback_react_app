import React, { Component } from 'react'
import "./item-add-form.css"

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        console.log(e.target.value)
        this.setState({ label: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label)
        this.setState({ label: '' })
    }

    render() {


        return (
            <form onSubmit={this.onSubmit}>
                <div className='item-add-form'>
                    <input type='text' className='form-control'
                        value={this.state.label}
                        onChange={this.onLabelChange} />
                    <button onClick={this.onSubmit} className='btn btn-primary'>ADD</button>
                </div>
            </form>
        )
    }
}
