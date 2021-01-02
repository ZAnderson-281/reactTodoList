import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  // Delete the todo from the array when trash button is clicked
  const deleteHandler = () => {
    // Filter based on ID
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Toggle the completed object property when completed button is clicked
  const completeHandler = () => {
    setTodos(
      // For each item in the array check to see if the item is the clicked one and change the property if it is
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>

        <button className="complete-btn" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>

        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
