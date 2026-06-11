async function TodoList() {
  async function getTodos() {
    const res = await fetch('http://localhost:3000/api/todos');
    const todos = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return todos;
  }

  const todos = await getTodos();

  return (
    <ul>
      {todos.map((todo: any) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
