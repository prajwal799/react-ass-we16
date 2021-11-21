import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList.jsx";
function TodoInput({ onSubmit }) {
  const [todo, setTodo] = useState([]);
  const [state, setState] = useState({
    title: "",
    description: "",
    status: "false"
  });
  const handleInputchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const add = () => {
    onSubmit(state);
  };
  console.log(setState);
  return (
    <div>
      <h1>Todo</h1>
      <input
        placeholder="add Something"
        name="title"
        value={state.title}
        onChange={handleInputchange}
      />
      <br />
      <br />
      <input
        placeholder="add Description"
        name="description"
        value={state.description}
        onChange={handleInputchange}
      />
      <br />
      <br />
      <button onClick={add}>Add</button>
      <div>
        {todo.map((item) => {
          return (
            <TodoList
              id={item.id}
              title={item.title}
              description={item.description}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
}
export default TodoInput;
