import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
