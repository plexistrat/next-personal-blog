import React from 'react';
import styles from './About.module.css';

type Props = {};

const About = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Αδέσποτες Ψυχές: Μια Κραυγή για Φροντίδα και Αγάπη</h2>
        <h3>6/3/2025</h3>
      </div>
      <img src="./homelessSouls.jpg" alt="" />
    </div>
  );
};

export default About;
