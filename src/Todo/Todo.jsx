import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
function Todo() {
  const [list, setList] = useState([]);

  const handleSubmit = ({ title, description, status }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status
    };
    setList([...list, payload]);
  };

  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList data={list} />
    </div>
  );
}
export default Todo;
