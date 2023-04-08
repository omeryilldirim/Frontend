import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";


const url = "https://63fa046b473885d837d6e9d1.mockapi.io/todos";


const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);


  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      setTodos(data);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  const addTodo:AddFn = async (text) => {
    const newTodo = { task: text, isCompleted: false };
    try {
      await axios.post(url, newTodo);
      getTodos()
    } catch (error) {
      alert(error);
    }
  };

  const toggleTodo:ToggleFn = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isCompleted: !item.isCompleted });
      getTodos();
    } catch (error) {
      alert(error);
    }
  }

  const  deleteTodo:DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
    } catch (error) {
      alert(error);
    }
  }


  useEffect(() => {
    getTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main">
      <InputForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default Home;
