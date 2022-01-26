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
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add todo..."
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default Form;
