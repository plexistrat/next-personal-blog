import Image from 'next/image';
import styles from './Card.module.css';

function Card({ title, image, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt="" />
      </div>
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
