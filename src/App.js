import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  // Run once at start to get local storage
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Filter todo list and save to local storage
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    // Filter items depending on what is selected on the dropdown
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
    }
  };

  // save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Get local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      {/* Create component based on filtered todos */}
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
