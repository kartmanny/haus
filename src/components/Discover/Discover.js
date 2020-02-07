import React from 'react';
import Seattle from '../../assets/img/outline-red.svg';
import DiscoverListings from './DiscoverListings';
import styles from './discover.module.scss';

const Discover = () => {
  return (
    <div className={styles.discoverGrid}>
      <div className={styles.discoverContainer}>
        <h2 className={styles.discoverTitle}>Seattle</h2>
        <img height={1000} src={Seattle} alt="Map image" />
      </div>
      <DiscoverListings />
    </div>
  );
};

export default Discover;
