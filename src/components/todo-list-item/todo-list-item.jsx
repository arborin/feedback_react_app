import React from 'react'
import './todo-list-item.css'

const TodoListItemFunc = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return <span className='todo-list-item' style={style}>{label}</span>
}

class TodoListItem extends React.Component {



    render() {
        const { label, onDeleted,
            onToggleDone,
            onToggleImportant, important, done } = this.props


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
            <button onClick={onToggleImportant} className='btn btn-sm btn-warning'>Important</button>
            <button onClick={onToggleDone} className='btn btn-sm btn-warning'>Done</button>
        </span>)
    }
}

export default TodoListItem