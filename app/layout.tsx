import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Good News App',
  description: 'Good News filtered by your own excluded keywords',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/profile'> My Profile</Link>
        </nav>
        <header className='bg-cyan-500'>
          <h1>Good News</h1>
          <h2>All of the news you want to read</h2>
        </header>
        <section>{children}</section>
      </body>
      <footer className='bg-green-50'>
        footer elements
        {/*twitter */} {/*github */} {/*email */} {/*copyright */}
      </footer>
    </html>
  );
}
