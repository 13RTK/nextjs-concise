import { Spinner } from '@/components/ui/spinner';

function Loading() {
  return (
    <div className='flex flex-1 justify-center items-center'>
      <Spinner className='size-10' />
    </div>
  );
}

export default Loading;
