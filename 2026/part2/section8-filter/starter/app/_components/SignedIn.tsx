import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

async function SignedIn({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
  }

  return children;
}

export default SignedIn;
