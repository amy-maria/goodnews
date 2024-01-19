import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <body>
        <Navbar />

        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
