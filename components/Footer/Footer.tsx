import React, { useEffect, useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import styles from './Footer.module.css';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing!');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.disclaimer}>
        <p>
          "Δεν μπορείς να σώσεις όλα τα αδέσποτα του κόσμου, αλλά μπορείς να αλλάξεις τον κόσμο για
          ένα από αυτά."
        </p>
      </div>

      <div className={styles.contactSocialNewsletter}>
        <div className={styles.contact}>
          <h2>Επικοινωνία</h2>
          <p>Email:info@adespotablog.gr</p>
          <p>Τηλέφωνο: +30 210 1234567</p>
        </div>
        <div className={styles.social}>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <TiSocialTwitter />
            Twitter
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            Facebook
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
            Instagram
          </a>
        </div>
        <div className={styles.newsletter}>
          <h3>Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {showButton && (
        <button type="button" onClick={scrollToTop} className={styles.scrollTopButton}>
          ⬆️ Top
        </button>
      )}

      <div className={styles.copyright}>
        <p>&copy; 2025 Φίλοι Χωρίς Σπίτι. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
