import React from 'react';
import washington from '../../assets/img/washington.svg';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        height={350}
        src={washington}
        style={{ marginLeft: 'auto', marginRight: '3rem' }}
        alt="Space Needle"
      />
      <div className={styles.footerContainer}>
        <span className={styles.footerTitle}>Haüs</span>
        <p className={styles.footerText}>
          Your home's location is super important. There's no need to have tons
          of tabs open just to compare various listings and neighborhoods when
          you're trying to find your dream home. With Haüs, you'll be able to
          find the perfect neighborhood for your home – give it a try! Search up
          a city and we'll do the rest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
