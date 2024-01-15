import styles from './styles.module.css';
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Profile NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
