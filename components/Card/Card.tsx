import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src="https://www.ygeiamou.gr/wp-content/uploads/2020/11/201118120944_dogsad.jpg"
          alt=""
        />
      </div>
      <div className={styles.cardTitle}>
        <h1>Γιατί υπάρχουν τόσα αδέσποτα; Οι κύριες αιτίες και πώς μπορούμε να βοηθήσουμε</h1>
      </div>
      <div className={styles.cardDate}>
        <h3> 12/03/2025 </h3>
      </div>
    </div>
  );
}

export default Card;
