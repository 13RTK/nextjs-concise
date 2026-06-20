import TodoAddButton from '@/app/_components/TodoAddButton';
import { addTodo } from '@/app/_utils/actions';
import { Input } from '@/components/ui/input';

function TodoAddForm() {
  return (
    <form action={addTodo} className='flex w-1/3 mx-auto mt-2'>
      <Input name='text' placeholder='Your Todo' className='rounded-md' />
      <TodoAddButton />
    </form>
  );
}

export default TodoAddForm;
