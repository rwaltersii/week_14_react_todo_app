import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (value) => {
    const newTodo = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodo);
  };

  const removeTodo = (index) => {
    console.log(index);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} />
        ))}
        <Form addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
