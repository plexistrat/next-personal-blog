import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MenuList from './MenuList';
import styles from './NavbarBurger.module.css';

function BurgerButton() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className={styles.burgerButton}>
      <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      {opened && <MenuList />}
    </div>
  );
}

export default BurgerButton;
