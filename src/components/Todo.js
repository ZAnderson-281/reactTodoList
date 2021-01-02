import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div>
      <div className="todo">
        <li className="todo-item">{text}</li>

        <button className="complete-btn">
          <i className="fas fa-check"></i>
        </button>

        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
