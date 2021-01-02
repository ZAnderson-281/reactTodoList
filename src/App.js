import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
