import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AuthProvider from './components/AuthProvider';

export const metadata: Metadata = {
  title: 'Good News',
  description: 'Good News filtered by your own keywords',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col'>
        <AuthProvider>
          <Navbar />
          <Hero />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
