'use client';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useFormStatus } from 'react-dom';

function TodoAddButton() {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' variant='default' className='rounded-md'>
      {pending && <Spinner data-icon='inline-start' />}
      {!pending && 'Add'}
    </Button>
  );
}

export default TodoAddButton;
