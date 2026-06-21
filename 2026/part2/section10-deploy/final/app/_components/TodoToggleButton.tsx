'use client';

import { TodoModel } from '@/app/generated/prisma/models';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useFormStatus } from 'react-dom';

function TodoToggleButton({ todo }: { todo: TodoModel }) {
  const { pending } = useFormStatus();

  return (
    <Button
      className='rounded-full'
      type='submit'
      disabled={pending}
      variant='outline'
    >
      {pending && <Spinner data-icon='inline-start' />}
      {!pending && (todo.completed ? 'Undo' : 'Done')}
    </Button>
  );
}

export default TodoToggleButton;
