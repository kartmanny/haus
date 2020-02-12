import React from 'react';
import HeroInput from 'components/Hero/HeroInput';
import Text from 'components/Text';
import styles from 'components/Hero/hero.module.scss';

const Hero = props => {
  return (
    <div className={styles.heroGrid}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Haüs</h1>
        <Text type="title3" className={styles.heroSubtitle}>
          We'll help you find the perfect neighborhood.
        </Text>
      </div>
      <HeroInput placeholder="Search for a city" id="heroInput" />
    </div>
  );
};

export default Hero;
