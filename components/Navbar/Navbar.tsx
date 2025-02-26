import React from 'react';
import styles from './Navbar.module.css';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.navbarTitle}>TITLE</h2>
      <div className={styles.navbarButtons}>
        <button type="button">Home</button>
        <button type="button">About</button>
        <button type="button">News</button>
        <button type="button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
