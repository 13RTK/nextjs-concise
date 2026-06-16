'use client';

import { TodoModel } from '@/app/generated/prisma/models';
import { useFormStatus } from 'react-dom';

function TodoActionButton({ todo }: { todo: TodoModel }) {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className={`border-blue-600 border-2 rounded hover:border-blue-300 ${pending ? 'border-white hover:border-white' : ''}`}
    >
      {todo.completed ? 'Undo' : 'Done'}
    </button>
  );
}

export default TodoActionButton;
