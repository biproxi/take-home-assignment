import Link from 'next/link';
import styles from './navbar.module.css';

export function Navbar(props: NavbarProps) {
  return (
    <div className={`${styles['nav']} ${styles['flex']}`}>
      <nav className={`${styles['links']} ${styles['flex']}`}>
        <Link href="/">Movie Ratings</Link>
        <Link href="/">Home</Link>
        <Link href="/modify">Edit</Link>
        <Link href="/display">Display</Link>
      </nav>
    </div>
  );
}

export default Navbar;
