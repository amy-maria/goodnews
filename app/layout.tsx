import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
          <h1>My NavBar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
