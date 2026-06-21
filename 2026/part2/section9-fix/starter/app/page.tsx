import TodoAddForm from '@/app/_components/TodoAddForm';
import TodoList from '@/app/_components/TodoList';
import Loading from '@/app/loading';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className='text-center'>
      <h1 className='text-6xl font-serif'>TODOS</h1>
      <hr />

      <TodoAddForm />

      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </main>
  );
}
