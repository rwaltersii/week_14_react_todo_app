import React from "react";

const Todo = ({ todo, index, remove }) => {
  const removeHandler = () => {
    remove(index);
  };

  return (
    <div>
      <div className="todo">
        {todo.text}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={removeHandler}
        ></button>
      </div>
    </div>
  );
};

export default Todo;
