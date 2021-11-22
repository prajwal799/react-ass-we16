function TodoList({
  id,
  title,
  status,
  description,
  handleStatus,
  deleteItem
}) {
  return (
    <ul>
      <li key={id}>
        {title} - {description} - {status ? "Done" : "Not Done"}
        <button onClick={() => handleStatus(id)}>Toggle</button>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </li>
    </ul>
  );
}

export default TodoList;
