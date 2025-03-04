import styles from './MenuList.module.css';

function MenuList() {
  return (
    <div className={styles.menuList}>
      <ul className={styles.menuListItems}>
        <li>
          <a href="/home" className={styles.menuListItem}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={styles.menuListItem}>
            About
          </a>
        </li>
        <li>
          <a href="/news" className={styles.menuListItem}>
            News
          </a>
        </li>
        <li>
          <a href="/contact" className={styles.menuListItem}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
