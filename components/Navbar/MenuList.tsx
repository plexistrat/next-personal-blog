import styles from './MenuList.module.css';

function MenuList() {
  return (
    <div className={styles.menuList}>
      <ul className={styles.menuListItems}>
        <li>
          <a href="/#" className={styles.menuListItem}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={styles.menuListItem}>
            Ενημέρωση
          </a>
        </li>
        <li>
          <a href="/news" className={styles.menuListItem}>
            SOS Info
          </a>
        </li>
        <li>
          <a href="/contact" className={styles.menuListItem}>
            Υιοθεσίες
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
