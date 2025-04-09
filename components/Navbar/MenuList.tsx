import { RiCloseLargeFill } from 'react-icons/ri';
import styles from './MenuList.module.css';

function MenuList({ toggle }: { toggle: () => void }) {
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
          <a href="/contact" className={styles.menuListItem}>
            SOS Info
          </a>
        </li>
        <li>
          <a href="/adopted" className={styles.menuListItem}>
            Υιοθεσίες
          </a>
        </li>
      </ul>
      <RiCloseLargeFill className={styles.closeButton} onClick={toggle} />
    </div>
  );
}

export default MenuList;
