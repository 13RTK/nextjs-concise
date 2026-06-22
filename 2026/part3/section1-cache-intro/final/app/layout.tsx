import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';

import { ThemeProvider } from 'next-themes';
import { RscBoundaryProvider } from '@rsc-boundary/next';
import { Providers } from '@/components/providers';
import { Navbar } from '@/app/_components/Navbar';
import SignedIn from '@/app/_components/SignedIn';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn('font-mono', jetbrainsMono.variable)}
    >
      <body className='antialiased min-h-dvh flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <RscBoundaryProvider>
              <SignedIn>
                <Navbar />
              </SignedIn>

              <main className='flex flex-1 flex-col min-h-0'>{children}</main>
            </RscBoundaryProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
