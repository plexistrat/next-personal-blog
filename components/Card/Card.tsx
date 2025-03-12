import React from 'react';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <img
        src="https://www.ygeiamou.gr/wp-content/uploads/2021/04/210401192157_dog-15.jpg"
        alt=""
      />
      <h3> 12/03/2025 </h3>
      <h2>Γιατί υπάρχουν τόσα αδέσποτα; Οι κύριες αιτίες και πώς μπορούμε να βοηθήσουμε</h2>
    </div>
  );
}

export default Card;
