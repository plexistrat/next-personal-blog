import Link from 'next/link';
import { RiCloseLargeFill } from 'react-icons/ri';
import styles from './MenuList.module.css';

type MenuListPropsType = {
  toggle: () => void;
  links: {
    href: string;
    label: string;
  }[];
};

function MenuList({ toggle, links }: MenuListPropsType) {
  return (
    <div className={styles.menuList}>
      <div className={styles.menuListItems}>
        {links.map((link) => {
          return (
            <Link key={link.href} href={link.label} className={styles.menuListItem}>
              {link.label}
            </Link>
          );
        })}
      </div>

      <RiCloseLargeFill className={styles.closeButton} onClick={toggle} />
    </div>
  );
}

export default MenuList;
