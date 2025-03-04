import React from 'react';
import Link from 'next/link';
import BurgerButton from './NavbarBurger';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.navbarTitle}>Φίλοι Χωρίς Σπίτι </h2>
      <div className={styles.navbarButtons}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/news">News</Link>
      </div>
      <BurgerButton />
    </div>
  );
};

export default Navbar;
