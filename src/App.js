import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list"
import ItemStatusFilter from "./components/item-status-filter";




function App() {

  const todoData = [
    { label: 'php', important: false, id: 1 },
    { label: 'react', important: true, id: 2 },
    { label: 'laravel', important: true, id: 3 },
  ]

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} onDeleted={(id) => console.log('del', id)} />
    </>
  );
}

export default App;
