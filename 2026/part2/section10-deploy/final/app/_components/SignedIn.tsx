'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { authClient } from '@/lib/auth-client';

function SignedIn({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Skeleton className='h-15' />;
  }

  if (!session) {
    return null;
  }

  return children;
}

export default SignedIn;
