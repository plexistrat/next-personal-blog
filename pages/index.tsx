// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { Welcome } from '../components/Welcome/Welcome';
import Head from 'next/head';
import Card from '@/components/Card/Card';
import styles from './index.module.css';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Welcome /> */}
      <div className={styles.homePage}>
        <h2>Καλώς ήρθατε στην ιστοσελιδα "Φίλοι Χωρίς Σπίτι"</h2>
        <h3>Μαζί, μπορούμε να κάνουμε τον κόσμο καλύτερο για τα αδέσποτα ζώα.</h3>
        {/* <ColorSchemeToggle /> */}
      </div>
      <div className={styles.homePageBanner}>
        <h4>Γίνε η φωνή τους</h4>
        <p>Υιοθέτησε,πρόσφερε εθελοντική βοήθεια ή κάνε μια δωρεά σήμερα.</p>
        <h4>Δώσε Ελπίδα, Δώσε Αγάπη</h4>
      </div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
