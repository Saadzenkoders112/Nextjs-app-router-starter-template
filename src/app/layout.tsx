import '@/styles/globals.css';
import { Providers } from '@/providers';
import Sidebar from '@/components/commons/sideBar';
import Header from '@/components/commons/header';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex items-center gap-2 h-screen overflow-x-hidden'>
        <Sidebar />
        <div className='flex flex-col h-screen w-screen'>
          <Suspense fallback={<p>Loading...</p>}>
            <Header />
          </Suspense>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
