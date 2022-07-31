import Link from 'next/link';
import Search from '../search/search';
import styles from './navbar.module.css';

export function Navbar(props: NavbarProps) {
  return (
    <div className={`${styles['nav']} ${styles['flex']}`}>
      <nav className={`${styles['links']} ${styles['flex']}`}>
        <Link href="/">Movie Ratings</Link>
        <Search />
        <Link href="/">Home</Link>
        <Link href="/edit">Edit</Link>
        <Link href="/ratings">Ratings</Link>
      </nav>
    </div>
  );
}

export default Navbar;
