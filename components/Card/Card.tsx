import styles from './Card.module.css';

function Card({ title, image, date }: any) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.cardDummy}>
        <div className={styles.cardTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.cardDate}>
          <p> {date} </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
