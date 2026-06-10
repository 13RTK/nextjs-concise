import TodoList from '@/app/components/TodoList';
import Loading from '@/app/loading';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main className='text-center'>
      <h1 className='text-6xl font-serif'>TODOS</h1>
      <hr />

      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </main>
  );
}
