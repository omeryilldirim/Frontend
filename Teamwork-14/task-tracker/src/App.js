import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || [])

  return (
    <div className="App">
      <Header />
      <AddTask todoList={todoList} setTodoList={setTodoList} />
      <Tasks todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
