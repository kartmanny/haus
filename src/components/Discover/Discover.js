import React from 'react';
import Seattle from '../../assets/img/seattle.jpg';
import DiscoverListings from './DiscoverListings';
import styles from './discover.module.scss';

const Discover = () => {
  return (
    <div className={styles.discoverGrid}>
      <div className={styles.discoverContainer}>
        <h2 className={styles.discoverTitle}>Seattle</h2>
        <img height={500} width={350} src={Seattle} alt="Map image" />
      </div>
      <DiscoverListings />
    </div>
  );
};

export default Discover;
