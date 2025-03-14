import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardDummy}>
        <div className={styles.cardTitle}>
          <h2>Γιατί υπάρχουν τόσα αδέσποτα; Οι κύριες αιτίες και πώς μπορούμε να βοηθήσουμε</h2>
        </div>
        <div className={styles.cardDate}>
          <p> 12/03/2025 </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
