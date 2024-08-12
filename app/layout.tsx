import 'normalize.css';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Loading from '../components/Loading';

const myFont = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800', ],
  subsets: ['latin'],
  variable: '--my-font-family',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
