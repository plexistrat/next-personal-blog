import { ArticlesCardsGrid } from '@/components/ArticlesCards/ArticlesCardsGrid';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { Welcome } from '../components/Welcome/Welcome';
import styles from './index.module.css';

export default function HomePage() {
  return (
    <>
      {/* <Welcome /> */}
      <div className={styles.homePage}>
        <h2>Καλώς ήρθατε στην ιστοσελιδα "Φίλοι Χωρίς Σπίτι"</h2>
        <h3>Μαζί, μπορούμε να κάνουμε τον κόσμο καλύτερο για τα αδέσποτα ζώα.</h3>
        {/* <ColorSchemeToggle /> */}
      </div>
      <div className={styles.homePageBanner}>
        <h4>
          Υιοθέτησε, πρόσφερε εθελοντική βοήθεια ή κάνε μια δωρεά σήμερα. Δώσε Ελπίδα, Δώσε Αγάπη
        </h4>
        <h4>Γίνε η φωνή τους</h4>
      </div>
      <div className={styles.information}>
        <h3>Eνημέρωση</h3>
        <ArticlesCardsGrid className={styles.articlesCardsGrid} />
      </div>
    </>
  );
}
