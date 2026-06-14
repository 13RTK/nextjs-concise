import TodoActionButton from '@/app/_components/TodoActionButton';
import { getTodos, toggleTodoComplete } from '@/app/_utils/actions';

async function TodoList() {
  const todos = await getTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <form
          action={toggleTodoComplete.bind(null, todo.id)}
          className='flex justify-center my-1'
          key={todo.id}
        >
          <li className={`${todo.completed ? 'line-through' : ''} mr-8`}>
            {todo.text}
          </li>

          <TodoActionButton todo={todo} />
        </form>
      ))}
    </ul>
  );
}

export default TodoList;
