import React from 'react'
import './todo-list-item.css'

const TodoListItemFunc = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return <span className='todo-list-item' style={style}>{label}</span>
}

class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        console.log(`Done ${this.props.label}`)
        this.setState({
            done: !this.state.done,
        })
    }

    onMarkImportant = () => {
        console.log("make important")
        this.setState({
            important: !this.state.important
        })
    }



    render() {
        const { label, onDeleted } = this.props

        const { done, important } = this.state;

        let classNames = 'todo-list-item'

        if (done) {
            classNames += " done"
        }

        if (important) {
            classNames += " important"
        }

        return (<span className={classNames}>
            <span className='mr-4 todo-list-item-label' onClick={this.onLabelClick}>
                {label}
            </span>
            <button onClick={onDeleted} className='btn btn-sm btn-danger'>delete</button>
            <button onClick={this.onMarkImportant} className='btn btn-sm btn-warning'>Important</button>
        </span>)
    }
}

export default TodoListItem