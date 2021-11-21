import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
function Todo() {
  const [list, setList] = useState([]);
  const [state, setState] = useState(false);
  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList data={list.filter((item) => !item.status)} />
      <div>
        <button onClick={() => setState(!state)}>Show Completed</button>
      </div>
      {state && <TodoList data={list.filter((item) => item.status)} />}
    </div>
  );
}
export default Todo;
