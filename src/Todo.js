import React from "react";

const Todo = ({ todo, index, remove }) => {
  const removeHandler = () => {
    remove(index);
  };

  return (
    <div className="todo" onClick={removeHandler}>
      {todo.text} (-)
    </div>
  );
};

export default Todo;
