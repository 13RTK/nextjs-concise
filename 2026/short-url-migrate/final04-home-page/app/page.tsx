'use client';

import { isURLShortSuccessAtom } from '@/app/_atoms/urlShortAtom';
import AppForm from '@/app/_features/home/AppForm';
import ShortURLField from '@/app/_ui/ShortURLField';
import { useAtomValue } from 'jotai';

export default function Page() {
  const isURLShortSuccess = useAtomValue(isURLShortSuccessAtom);

  return (
    <>
      <AppForm />
      {isURLShortSuccess && <ShortURLField />}
    </>
  );
}
