import '@/styles/globals.css';
import { Providers } from '@/providers';
import Sidebar from '@/components/commons/sideBar';
import Header from '@/components/commons/header';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

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
          <Header />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
