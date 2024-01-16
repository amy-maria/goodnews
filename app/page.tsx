import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href='/profile'>My Profile</Link>
      <h1>Hello World!</h1>
    </main>
  );
}
