import React from 'react';
import styles from './AnimalsCard.module.css';

const AnimalCards = () => {
  const animals = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      breed: 'Mixed',
      age: '2 years',
      image:
        'https://res.cloudinary.com/petrescue/image/upload/b_auto:predominant,c_pad,f_auto,h_648,w_648/h70e2reevgowyznze0ne.jpg',
      urgent: true,
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Cat',
      breed: 'Tabby',
      age: '1 year',
      image: 'https://powerpetsagency.com/wp-content/uploads/2024/11/Luna-Tabby-1-600x800.jpg',
    },
    {
      id: 3,
      name: 'Charlie',
      type: 'Cat',
      breed: 'Persian',
      age: '3 years',
      image:
        'https://lh4.googleusercontent.com/proxy/N6I7jVzyokJPXTUCyYa6xEYxET7JECsRP-RC__oPjC3QjQJTrWzvvlokELQxkPTbm-e4CatYjBVkrPuW4LmmzM8fZOnphFEmEOGYUDBJaQ',
    },
    {
      id: 4,
      name: 'Bella',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '4 years',
      image: 'https://www.goldenrescue.com/wp-content/uploads/2021/03/Bella-1.jpg',
    },
  ];

  return (
    <div className={styles.animalCardsContainer}>
      <h2 className={styles.sectionTitle}>Γνωρίστε τους φίλους μας</h2>

      <div className={styles.cardsGrid}>
        {animals.map((animal) => (
          <div key={animal.id} className={styles.animalCard}>
            <div className={styles.cardImageContainer}>
              <img
                src={animal.image}
                alt={`${animal.name} the ${animal.breed} ${animal.type}`}
                className={styles.cardImage}
              />
              {animal.urgent && <span className={styles.urgentBadge}>Urgent</span>}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.animalName}>{animal.name}</h3>
              <p className={styles.animalDetails}>
                {animal.breed} {animal.type}, {animal.age}
              </p>
              <button type="button" className={styles.meetButton}>
                Meet {animal.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalCards;
