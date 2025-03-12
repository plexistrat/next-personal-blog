import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BurgerButton from './NavbarBurger';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeColor);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', changeColor);
      }
    };
  }, []);

  return (
    <div className={color ? styles.navbarNoColor : styles.navbar}>
      <h2 className={styles.navbarTitle}>Φίλοι Χωρίς Σπίτι </h2>
      {/* <Image src="/logo.png" className={styles.navbarLogo} width={50} height={50} alt="logo" /> */}

      <div className={styles.navbarButtons}>
        <Link
          style={
            color
              ? { color: 'transparent', textDecoration: 'none' }
              : { color: 'black', textDecoration: 'none' }
          }
          href="/"
        >
          Home
        </Link>
        <Link
          style={
            color
              ? { color: 'transparent', textDecoration: 'none' }
              : { color: 'black', textDecoration: 'none' }
          }
          href="/about"
        >
          Ενημέρωση
        </Link>
        <Link
          style={
            color
              ? { color: 'transparent', textDecoration: 'none' }
              : { color: 'black', textDecoration: 'none' }
          }
          href="/contact"
        >
          Νέα
        </Link>
        <Link
          style={
            color
              ? { color: 'transparent', textDecoration: 'none' }
              : { color: 'black', textDecoration: 'none' }
          }
          href="/news"
        >
          Επικοινωνία
        </Link>
      </div>
      <BurgerButton />
    </div>
  );
};

export default Navbar;
