import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";




function App() {

  const todoData = [
    { label: 'php', important: false },
    { label: 'react', important: true },
    { label: 'laravel', important: true },
  ]

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </>
  );
}

export default App;
