import TodoDeleteButton from '@/app/_components/TodoDeleteButton';
import TodoToggleButton from '@/app/_components/TodoToggleButton';
import { getTodos, toggleTodoComplete } from '@/app/_utils/actions';

async function TodoList() {
  'use cache';

  const todos = await getTodos();

  console.log('Get TODOS in TodoList component');

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

          <TodoToggleButton todo={todo} />
          <TodoDeleteButton todo={todo} />
        </form>
      ))}
    </ul>
  );
}

export default TodoList;
