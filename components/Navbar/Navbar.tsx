import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import MenuList from './MenuList';
import BurgerButton from './NavbarBurger';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className={styles.navbar}>
      <Link style={{ color: 'black', textDecoration: 'none' }} href="/">
        <h2 className={styles.navbarTitle}>Φίλοι Χωρίς Σπίτι </h2>
      </Link>

      <div className={styles.navbarButtons}>
        <Link style={{ color: 'black', textDecoration: 'none' }} href="/">
          Home
        </Link>
        <Link style={{ color: 'black', textDecoration: 'none' }} href="/about">
          Ενημέρωση
        </Link>

        <Link style={{ color: 'black', textDecoration: 'none' }} href="/contact">
          SOS Info
        </Link>

        <Link style={{ color: 'black', textDecoration: 'none' }} href="/adopted">
          Υιοθεσίες
        </Link>
      </div>

      <BurgerButton toggle={toggle} />
      {opened && <MenuList toggle={toggle} />}
    </div>
  );
};

export default Navbar;
