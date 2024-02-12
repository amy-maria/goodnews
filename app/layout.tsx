import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { inter } from './ui/fonts';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Good News App',
  description: 'Good News filtered by your own excluded keywords',
};

export default function RootLayout({
  children,
  article,
}: {
  children: React.ReactNode;
  article: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <Hero />
        <main className='min-h-screen flex flex-col{`${inter.className} antialiased`}'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
