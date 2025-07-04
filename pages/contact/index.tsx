import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Φορείς και Οργανώσεις για Υιοθεσία, Διάσωση, Δωρεές και Στειρώσεις Αδέσποτων Ζώων</h1>
      <p>
        Η φροντίδα των αδέσποτων ζώων είναι μια σημαντική κοινωνική δράση που μπορεί να γίνει μέσω
        υιοθεσίας, διάσωσης, δωρεών ή προγραμμάτων στείρωσης. Παρακάτω παρουσιάζονται φορείς και
        οργανώσεις στην Ελλάδα που μπορούν να σας βοηθήσουν.
      </p>
      <hr />
      <h2>1. Υιοθεσία ή Διάσωση Αδέσποτου Ζώου</h2>
      <p>
        Αν ενδιαφέρεστε να υιοθετήσετε ή να σώσετε ένα αδέσποτο, μπορείτε να επικοινωνήσετε με τις
        ακόλουθες οργανώσεις:
      </p>
      <ul>
        <h3>Ζωοφιλικές Οργανώσεις & Καταφύγια</h3>
        <li>
          Φιλοζωική Οργάνωση Ελλάδος <a href="https://www.fzoi.gr">www.filozoiki.gr</a>
        </li>
        <li>
          Dogs’ Voice <a href="https://www.dogsvoice.gr">www.dogsvoice.gr</a>
        </li>
        <li>
          SAPT Hellas – Εκπαίδευση και υιοθεσίες σκύλων{' '}
          <a href="https://www.sapt.gr">www.sapt.gr</a>
        </li>
        <li>
          Save a Greek Stray <a href="https://www.saveagreekstray.gr">www.saveagreekstray.org</a>
        </li>
        <li>
          SCARS Greece <a href="https://www.scars.gr">www.scars.gr</a>
        </li>
      </ul>
      <h3>Δήμοι και Δημοτικά Καταφύγια</h3>

      <p>
        Πολλοί δήμοι στην Ελλάδα έχουν προγράμματα υιοθεσίας και φιλοξενίας αδέσποτων ζώων.
        Επικοινωνήστε με την τοπική υπηρεσία φιλοζωίας του δήμου σας.
      </p>
      <hr />
      <h2>2. Δωρεές για τη Φροντίδα Αδέσποτων</h2>
      <p>
        Αν θέλετε να στηρίξετε οικονομικά ή με προμήθειες (τροφές, φάρμακα, κουβέρτες κ.λπ.),
        μπορείτε να βοηθήσετε τις εξής οργανώσεις:
      </p>
      <ul>
        <li>
          Αρκτούρος (για αρκούδες και λύκους) – <a href="https://www.arturos.gr">www.arcturos.gr</a>
        </li>
        <li>
          ANIMAL ACTION (Γαίες και δράσεις σε όλη την Ελλάδα) –
          <a href="www.animalactiongreece.gr">www.animalactiongreece.gr</a>
        </li>
        <li>Dogs’ Voice – Δράσεις για την προστασία των σκύλων</li>
        <li>
          Φιλοζωικές οργανώσεις της περιοχής σας – Πολλές δέχονται τροφές, φάρμακα και οικονομική
          υποστήριξη
        </li>
      </ul>
      <hr />
      <h2>3. Στειρώσεις Αδέσποτων Ζώων</h2>
      <p>
        Η στείρωση είναι μια από τις πιο αποτελεσματικές λύσεις για τον περιορισμό του πληθυσμού των
        αδέσποτων και την προστασία της υγείας τους. Μπορείτε να απευθυνθείτε σε:
      </p>
      <ul>
        <li style={{ fontWeight: 'bold' }}>Δήμους και Κτηνιατρικές Υπηρεσίες</li>
        <p>
          Πολλοί δήμοι στην Ελλάδα παρέχουν δωρεάν ή χαμηλού κόστους στειρώσεις για αδέσποτα ζώα.
        </p>
        <p>Ρωτήστε την τοπική φιλοζωική οργάνωση ή το δήμο σας.</p>
        <li style={{ fontWeight: 'bold' }}>Ιδιωτικά Κτηνιατρεία με Εκπτώσεις</li>
        <p>
          Ορισμένοι κτηνίατροι συνεργάζονται με φιλοζωικές οργανώσεις για χαμηλού κόστους
          στειρώσεις.
        </p>
        <li style={{ fontWeight: 'bold' }}>Προγράμματα από Διεθνείς Οργανώσεις</li>
        <p>
          Οργανώσεις όπως η Vets in Action και η Animal Action Greece οργανώνουν εκστρατείες
          στείρωσης σε διάφορες περιοχές της Ελλάδας.
        </p>
      </ul>
      <hr />
      <h2>4. Περίθαλψη Τραυματισμένων Ζώων</h2>
      <p>Αν βρείτε ένα τραυματισμένο ζώο, μπορείτε να απευθυνθείτε στους παρακάτω φορείς:</p>
      <ul>
        <li style={{ fontWeight: 'bold' }}>Δήμοι & Κτηνιατρικές Υπηρεσίες</li>
        <p>
          Οι περισσότεροι δήμοι συνεργάζονται με κτηνίατρους για τη φροντίδα τραυματισμένων
          αδέσποτων ζώων. Επικοινωνήστε με την αρμόδια υπηρεσία φιλοζωίας του δήμου σας.
        </p>
        <li style={{ fontWeight: 'bold' }}>ANIMAL ACTION GREECE (πρώην GAWF)</li>
        <p>
          Παρέχει κτηνιατρική περίθαλψη και οργανώνει δράσεις για ζώα σε όλη την Ελλάδα.
          <a href="https://www.animalactiongreece.org/">www.animalactiongreece.gr</a>
        </p>
        <li style={{ fontWeight: 'bold' }}>ΕΚΠΑΖ – Ελληνικό Κέντρο Περίθαλψης Άγριων Ζώων</li>
        <p>
          Αν βρείτε τραυματισμένο άγριο ζώο (π.χ. πουλί, χελώνα, αλεπού), επικοινωνήστε στο
          <a href="https://www.ekpaz.gr/">www.ekpaz.gr</a>
        </p>
        <li style={{ fontWeight: 'bold' }}>ΑΝΙΜΑ – Σύλλογος Προστασίας & Περίθαλψης Άγριας Ζωής</li>
        <p>
          Αναλαμβάνει διάσωση και περίθαλψη άγριων ζώων.{' '}
          <a href="https://www.anima.gr">www.wild-anima.gr</a>
        </p>
        <li style={{ fontWeight: 'bold' }}>ΑΡΚΤΟΥΡΟΣ – Περίθαλψη Άγριων Ζώων (Αρκούδες & Λύκοι)</li>
        <p>
          Για τραυματισμένες αρκούδες ή λύκους, καλέστε τον Αρκτούρο
          <a href="www.arcturos.gr">www.arcturos.gr</a>.
        </p>
        <li style={{ fontWeight: 'bold' }}>Κτηνίατροι της Περιοχής σας</li>
        <p>
          Σε περιπτώσεις επείγουσας ανάγκης, ένας κτηνίατρος μπορεί να προσφέρει την πρώτη βοήθεια
          σε ένα τραυματισμένο ζώο.
        </p>
      </ul>
      <hr />
      <p className={styles.lastparagraph}>
        Η προστασία των αδέσποτων και τραυματισμένων ζώων απαιτεί συλλογική δράση. Είτε θέλετε να
        υιοθετήσετε, να κάνετε δωρεά, να βοηθήσετε σε στείρωση ή να παρέχετε περίθαλψη σε ένα
        τραυματισμένο ζώο, υπάρχουν πολλοί φορείς που μπορούν να σας καθοδηγήσουν. Αν ενδιαφέρεστε
        για περισσότερες πληροφορίες, επικοινωνήστε με τις τοπικές φιλοζωικές οργανώσεις ή τον δήμο
        σας!
      </p>
    </div>
  );
};

export default Contact;
