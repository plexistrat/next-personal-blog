import React, { useState } from 'react';
import { Text } from '@mantine/core';
import styles from './Card.module.css';

function Card() {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  if (isReadMore) {
    return (
      <div className={styles.card}>
        <img
          className={styles.cardImage}
          src="https://www.ygeiamou.gr/wp-content/uploads/2020/11/201118120944_dogsad.jpg"
          alt=""
        />
        <h3 className={styles.cardDate}> 12/03/2025 </h3>
        <h1 className={styles.cardTitle}>
          Γιατί υπάρχουν τόσα αδέσποτα; Οι κύριες αιτίες και πώς μπορούμε να βοηθήσουμε
        </h1>
        <button type="button" className={styles.cardButton} onClick={toggleReadMore}>
          Read More
        </button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src="https://www.ygeiamou.gr/wp-content/uploads/2020/11/201118120944_dogsad.jpg"
        alt=""
      />
      <h3 className={styles.cardDate}> 12/03/2025 </h3>
      <h1 className={styles.cardTitle}>
        Γιατί υπάρχουν τόσα αδέσποτα; Οι κύριες αιτίες και πώς μπορούμε να βοηθήσουμε
      </h1>
      <Text className={styles.cardText} lineClamp={3} mt="md" withEllipsis>
        Γιατί υπάρχουν τόσα αδέσποτα ζώα; Το ζήτημα των αδέσποτων ζώων είναι ένα φαινόμενο που
        απασχολεί πολλές κοινωνίες παγκοσμίως. Στην Ελλάδα, αλλά και σε άλλες χώρες, η παρουσία
        αδέσποτων σκύλων και γατών είναι έντονη, προκαλώντας συχνά προβληματισμό και ανησυχία.
        Γιατί, όμως, υπάρχουν τόσα πολλά αδέσποτα; Ας δούμε τις βασικότερες αιτίες: 1. **Εγκατάλειψη
        κατοικιδίων:** Πολλοί άνθρωποι αποκτούν ζώα χωρίς να έχουν συνειδητοποιήσει τις ευθύνες που
        συνεπάγεται η φροντίδα τους. Όταν συνειδητοποιούν ότι δεν μπορούν να τα φροντίσουν, τα
        εγκαταλείπουν στους δρόμους. 2. **Ανεξέλεγκτη αναπαραγωγή:** Τα ζώα που δεν έχουν στειρωθεί
        αναπαράγονται ελεύθερα, με αποτέλεσμα τον ανεξέλεγκτο πολλαπλασιασμό των αδέσποτων. Η
        έλλειψη προγραμμάτων στείρωσης συμβάλλει στη διατήρηση του προβλήματος. 3. **Έλλειψη
        νομοθετικής επιβολής:** Παρόλο που υπάρχουν νόμοι για την προστασία των ζώων, συχνά δεν
        εφαρμόζονται αυστηρά. Η έλλειψη ελέγχων και κυρώσεων επιτρέπει σε πολλούς να εγκαταλείπουν
        ανενόχλητοι τα ζώα τους. 4. **Αδιαφορία και έλλειψη παιδείας:** Η έλλειψη ενημέρωσης σχετικά
        με τη σημασία της υιοθεσίας αντί της αγοράς ζώων, καθώς και η έλλειψη σεβασμού προς τα ζώα,
        οδηγούν στη δημιουργία και διατήρηση του προβλήματος. 5. **Οικονομικές δυσκολίες:** Η
        οικονομική κρίση έχει οδηγήσει πολλούς ανθρώπους στο να εγκαταλείψουν τα κατοικίδιά τους,
        καθώς δεν μπορούν να καλύψουν τα έξοδα για την τροφή, την περίθαλψη και τη φροντίδα τους.
        **Τι μπορούμε να κάνουμε;** - Να στηρίξουμε τις δράσεις φιλοζωικών οργανώσεων. - Να
        προωθήσουμε τη στείρωση των κατοικιδίων. - Να υιοθετήσουμε ζώα αντί να αγοράζουμε. - Να
        ενημερώσουμε και να ευαισθητοποιήσουμε τον κόσμο. - Να πιέσουμε για αυστηρότερη εφαρμογή των
        νόμων. **Λύσεις για το πρόβλημα των αδέσποτων:** 1. **Δημιουργία δημοτικών καταφυγίων:** Οι
        δήμοι να δημιουργήσουν και να διατηρούν κατάλληλα εξοπλισμένα καταφύγια για τα αδέσποτα. 2.
        **Προγράμματα στείρωσης:** Να ενισχυθούν και να χρηματοδοτηθούν οι μαζικές στειρώσεις σε
        συνεργασία με κτηνιάτρους. 3. **Καμπάνιες ενημέρωσης:** Δημόσιες εκστρατείες για την
        προώθηση της υιοθεσίας και της υπεύθυνης φροντίδας των ζώων. 4. **Κίνητρα για υιοθεσία:**
        Παροχή κινήτρων, όπως μείωση δημοτικών τελών, σε όσους υιοθετούν αδέσποτα ζώα. 5.
        **Εκπαίδευση στα σχολεία:** Εισαγωγή μαθημάτων για τη φιλοζωία και τη σημασία της προστασίας
        των ζώων. 6. **Ενίσχυση της νομοθεσίας:** Αυστηρότερες ποινές για όσους εγκαταλείπουν ή
        κακομεταχειρίζονται ζώα.
      </Text>
      <button type="button" className={styles.cardButton} onClick={toggleReadMore}>
        Read More
      </button>
    </div>
  );
}

export default Card;
