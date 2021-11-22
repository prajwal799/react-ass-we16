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
      status: false
    };
    setList([...list, payload]);
  };
  // Change Status
  const handleStatus = (id) => {
    const updatesStatus = list.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setList(updatesStatus);
  };
  // delete item in list
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id != id));
  };
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      {list.map((item) => {
        return (
          <TodoList
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            handleStatus={handleStatus}
            deleteItem={deleteItem}
          />
        );
      })}
      {/* <div>
        <button onClick={() => setState(!state)}>Show Completed</button>
      </div>
      {state && <TodoList data={list.filter((item) => item.status)} />} */}
    </div>
  );
}
export default Todo;
