import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing!');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {year} Your Blog Name. All Rights Reserved.</p>

        <nav>
          <ul className={styles.footerNav}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </nav>

        <div className={styles.newsletter}>
          <h3>Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className={styles.social}>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" />
            Twitter
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
            Facebook
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
            Instagram
          </a>
        </div>
      </div>

      {showButton && (
        <button onClick={scrollToTop} className={styles.scrollTopButton}>
          ⬆️ Top
        </button>
      )}
    </footer>
  );
};

export default Footer;
