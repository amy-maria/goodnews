import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { inter } from './ui/fonts';
import Footer from './components/Footer';
import AuthProvider from './components/AuthProvider';

export const metadata: Metadata = {
  title: 'Good News',
  description: 'Good News filtered by your own keywords',
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
        <AuthProvider>
          <Navbar />
          <Hero />
          <main className='min-h-screen flex flex-col{`${inter.className} antialiased`}'>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
