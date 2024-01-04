import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
    console.log(todos)

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item
        return <li key={item.id}><TodoListItem {...itemProps} /></li>
    })


    return (
        <ul>
            {elements}
        </ul>
    )
}

export default TodoList;