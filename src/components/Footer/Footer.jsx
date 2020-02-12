import React from 'react';
import washington from 'assets/img/washington.svg';
import outline from 'assets/img/outline.svg';

import Text from 'components/Text';
import styles from 'components/Footer/footer.module.scss';

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
        <Text type="title1" className={styles.footerTitle}>
          Haüs
        </Text>
        <Text type="large" className={styles.footerText}>
          Your home's location is super important. There's no need to have tons
          of tabs open just to compare various listings and neighborhoods when
          you're trying to find your dream home. With Haüs, you'll be able to
          find the perfect neighborhood for your home – give it a try! Search up
          a city and we'll do the rest.
        </Text>
      </div>
      <img
        height={350}
        src={outline}
        style={{
          marginLeft: 'auto',
          marginRight: '3rem',
          border: '0 solid black'
        }}
        alt="Space Needle"
      />
    </footer>
  );
};

export default Footer;
