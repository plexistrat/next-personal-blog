import Image from 'next/image';
import styles from './Card.module.css';

function Card({ title, image, date }) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      {/* <Image
        loader={image}
        // className={styles.cardImage}
        width={400}
        height={300}
        src={image}
        style={{ objectFit: 'contain' }}
        alt="backround of the card"
      /> */}

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
