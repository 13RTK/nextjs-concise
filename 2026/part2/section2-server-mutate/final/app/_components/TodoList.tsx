import { getTodos } from '@/app/_utils/actions';

async function TodoList() {
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
