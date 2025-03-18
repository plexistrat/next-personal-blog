import React from 'react';
import Banner from '@/components/Banner/Banner';
import Card from '@/components/Card/Card';
import styles from './About.module.css';

type Props = {};

const About = (props: Props) => {
  return (
    <div className={styles.about}>
      <h2>Ενημέρωση</h2>
      <Banner />
      <Card />
    </div>
  );
};

export default About;
