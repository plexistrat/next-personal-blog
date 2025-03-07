import Link from 'next/link';
import BurgerButton from './NavbarBurger';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.navbarTitle}>Φίλοι Χωρίς Σπίτι </h2>
      <div className={styles.navbarButtons}>
        <Link style={{ color: 'black', textDecoration: 'none' }} href="/">
          Home
        </Link>
        <Link style={{ color: 'black', textDecoration: 'none' }} href="/about">
          About
        </Link>
        <Link style={{ color: 'black', textDecoration: 'none' }} href="/contact">
          Contact
        </Link>
        <Link style={{ color: 'black', textDecoration: 'none' }} href="/news">
          News
        </Link>
      </div>
      <BurgerButton />
    </div>
  );
};

export default Navbar;
