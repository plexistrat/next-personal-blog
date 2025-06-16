import { Burger } from '@mantine/core';
import styles from './NavbarBurger.module.css';

function BurgerButton({ toggle }: { toggle: () => void }) {
  return (
    <div className={styles.burgerButton}>
      <Burger onClick={toggle} aria-label="Toggle navigation" />
    </div>
  );
}

export default BurgerButton;
