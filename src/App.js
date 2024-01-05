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
      { label: 'php', important: false, id: 1 },
      { label: 'react', important: true, id: 2 },
      { label: 'laravel', important: true, id: 3 },
    ]
  }


  deleteItem = (id) => {
    let newData = this.state.todoData.filter((el) => { if (el.id != id) return el })
    console.log(newData);
    this.setState({ todoData: newData })
  }

  addItem = (text) => {
    // generate id,
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }
    this.setState(
      { todoData: [...this.state.todoData, newItem] }
    )
  }

  onToggleImportant = (id) => {
    console.log("IMPORTANT!" + id)
  }

  onToggleDone = (id) => {
    console.log("DONE" + id)
  }

  render() {
    return (
      <>
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList todos={this.state.todoData}
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
