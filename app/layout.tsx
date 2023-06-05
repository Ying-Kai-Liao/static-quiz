import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
});

export const metadata = {
  title: '測驗致富心態',
  description: '測驗致富心態'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className=''>
        <Navbar />
        <div className='flex flex-col [&>main bg-[url("/quiz.png")] bg-cover bg-no-repeat bg-center min-h-[94.5vh]'>
          <main className={`${quicksand.variable} 
            font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center 
            sm:absolute  sm:max-w-none pt-20 lg:pt-40 xs:pt-20
          `}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
