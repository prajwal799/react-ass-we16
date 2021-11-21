function TodoList({ data }) {
  console.log(data);
  return (
    <ul>
      {data.map((item) => (
        <h1 key={item.id}>
          {item.title} - {item.description} - {item.status}
        </h1>
      ))}
    </ul>
  );
}

export default TodoList;