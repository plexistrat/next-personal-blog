import React from 'react';
import Βanner from '@/components/Banner/Banner';
import styles from './Contact.module.css';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <Βanner />
    </div>
  );
};

export default Contact;
