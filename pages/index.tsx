// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ArticlesCardsGrid } from '@/components/ArticlesCards/ArticlesCardsGrid';
// import { Welcome } from '../components/Welcome/Welcome';
import styles from './index.module.css';

export default function HomePage() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      <div className={styles.homePage}>
        <h2>Καλώς ήρθατε στην ιστοσελιδα "Φίλοι Χωρίς Σπίτι"</h2>
        <p>
          Μαζί, μπορούμε να κάνουμε τον κόσμο καλύτερο για τα αδέσποτα ζώα. Υιοθέτησε, πρόσφερε
          εθελοντική βοήθεια ή κάνε μια δωρεά σήμερα. Δώσε Ελπίδα, Δώσε Αγάπη,Γίνε η φωνή τους
        </p>
      </div>
      {/* <ArticlesCardsGrid /> */}
    </>
  );
}
