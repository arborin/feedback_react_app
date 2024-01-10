import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list"
import ItemStatusFilter from "./components/item-status-filter";
import React from "react";
import ItemAddForm from "./components/item-add-form";




class App extends React.Component {

  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('php'),
      this.createTodoItem('react'),
      this.createTodoItem('laravel')
    ],
    term: ''
  }

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }


  deleteItem = (id) => {
    let newData = this.state.todoData.filter((el) => { if (el.id != id) return el })
    console.log(newData);
    this.setState({ todoData: newData })
  }

  addItem = (text) => {
    // generate id,
    console.log("GET TEXT: ", text)
    const newItem = this.createTodoItem(text)
    this.setState(
      { todoData: [...this.state.todoData, newItem] }
    )
  }

  onToggleImportant = (id) => {
    console.log("IMPORTANT!" + id)

    let newData = this.state.todoData.filter((el) => { if (el.id == id) { el.important = !el.important; } return el });

    this.setState({ 'todoData': newData });

  }

  onToggleDone = (id) => {
    console.log("DONE" + id)
    let newData = this.state.todoData.filter((el) => { if (el.id == id) { el.done = !el.done; } return el });

    this.setState({ 'todoData': newData });
  }

  search = (items, term) => {
    if (term.length == 0) {
      return items
    }

    // let newData = items.filter((el) => { el.label.indexOf(term) > -1 });

    // return newData
  }

  render() {
    const { todoData, term } = this.state
    console.log(todoData)

    const fisibleItems = this.search(todoData, term);

    const doneCount = this.state.todoData.filter((el) => !el.done).length
    const todoCount = this.state.todoData.length - doneCount
    return (
      <>
        <AppHeader todo={doneCount} done={todoCount} />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem} />
      </>
    );
  }
}

export default App;
