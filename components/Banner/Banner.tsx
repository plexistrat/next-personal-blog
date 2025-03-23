import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.homePageBanner}>
      <h4>Γίνε η φωνή τους</h4>
      <p>Υιοθέτησε,πρόσφερε εθελοντική βοήθεια ή κάνε μια δωρεά σήμερα.</p>
      <h4>Δώσε Ελπίδα, Δώσε Αγάπη</h4>
    </div>
  );
};

export default Banner;
