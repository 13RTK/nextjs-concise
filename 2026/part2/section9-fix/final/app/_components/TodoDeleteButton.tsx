'use client';

import { deleteTodo } from '@/app/_utils/actions';
import { TodoModel } from '@/app/generated/prisma/models';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useFormStatus } from 'react-dom';

function TodoDeleteButton({ todo }: { todo: TodoModel }) {
  const { pending } = useFormStatus();

  return (
    <Button
      className='rounded-full bg-red-600'
      type='submit'
      disabled={pending}
      variant='outline'
      formAction={deleteTodo.bind(null, todo.id)}
    >
      {pending && <Spinner data-icon='inline-start' />}
      {!pending && 'Delete'}
    </Button>
  );
}

export default TodoDeleteButton;
