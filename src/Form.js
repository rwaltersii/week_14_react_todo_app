import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            className="input"
            value={value}
            placeholder="Enter new todo..."
            onChange={onChangeHandler}
          />
          <button className="rw">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
