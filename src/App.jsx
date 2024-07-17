import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ToDoForm from "./components/ToDoForm";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  //Use state to Setting the task
  const [todo, setTodo] = useState([]);

  //UseEffect Hook Stored Todos in local storage , It will be helpful if we want to get data locally from the cache
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(storedTodos);
  }, []);

  //Adding the task functionalities
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTodo(todo.unshift(newTask));
    localStorage.setItem("todos", JSON.stringify(todo));
    toast.success("Your task has been successfully added");
    setTodo(JSON.parse(localStorage.getItem("todos")));
  };

  //Deleting the task functionalities
  const deleteTask = (id) => {
    const filteredTodos = todo.filter((item) => item.id !== id);
    toast.warning("Your task has been deleted successfully");
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodo(filteredTodos);
  };

  return (
    <>
      <Navbar />
      <ToDoForm addTask={addTask} />
      <ToDoList todo={todo} deleteTask={deleteTask} />
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
};

export default App;
