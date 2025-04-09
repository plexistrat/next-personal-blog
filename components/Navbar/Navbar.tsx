import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import MenuList from './MenuList';
import BurgerButton from './NavbarBurger';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Ενημέρωση' },
  { href: '/contact', label: 'SOS Info' },
  { href: '/adopted', label: 'Υιοθεσίες' },
];

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className={styles.navbar}>
      <Link style={{ color: 'black', textDecoration: 'none' }} href="/">
        <h2 className={styles.navbarTitle}>Φίλοι Χωρίς Σπίτι </h2>
      </Link>

      <div className={styles.navbarButtons}>
        {links.map((link) => (
          <Link key={link.href} style={{ color: 'black', textDecoration: 'none' }} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <BurgerButton toggle={toggle} />
      {opened && <MenuList toggle={toggle} />}
    </div>
  );
};

export default Navbar;
