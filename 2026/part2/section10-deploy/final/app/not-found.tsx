import Link from 'next/link';

function NotFound() {
  return (
    <main className='flex flex-col gap-4 min-h-dvh justify-center items-center'>
      <h1 className='text-6xl'>not found</h1>
      <Link href='/' className='underline'>
        Back to home
      </Link>
    </main>
  );
}

export default NotFound;
