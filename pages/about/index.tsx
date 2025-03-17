import React from 'react';
import Banner from '@/components/Banner/Banner';
import styles from './About.module.css';

type Props = {};

const About = (props: Props) => {
  return (
    <div className={styles.about}>
      <h2>Ενημέρωση</h2>
      <Banner />
    </div>
  );
};

export default About;
