import React from 'react';
import styles from './MenuList.module.css';

function MenuList() {
  return (
    <div className={styles.menuList}>
      <ul className={styles.menuListItems}>
        <li a href="#" className={styles.menuListItem}>
          Home
        </li>
        <li a href="#" className={styles.menuListItem}>
          About
        </li>
        <li a href="#" className={styles.menuListItem}>
          News
        </li>
        <li a href="#" className={styles.menuListItem}>
          Contact
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
