import React, { useState } from 'react';
import Seattle from '../../assets/img/seattle.jpg';
import DiscoverListings from './DiscoverListings';
import styles from './discover.module.scss';

const Discover = () => {
  const [view, setView] = useState(<DiscoverListings />);
  const handleClick = e => {
    e.preventDefault();
    setView(
      <div
        style={{
          padding: '10rem',
          background: 'var(--seed-color-primary)',
          borderRadius: '2rem',
          minHeight: '40rem'
        }}
      >
        <span style={{ fontSize: '3rem', color: 'white' }}>
          Data Dashboard Placeholder
        </span>
      </div>
    );
  };
  return (
    <div className={styles.discoverGrid}>
      <div className={styles.discoverContainer}>
        <h2 className={styles.discoverTitle}>Seattle</h2>
        <img
          height={500}
          width={350}
          src={Seattle}
          alt="Map"
          onContextMenu={handleClick}
        />
      </div>
      {view}
    </div>
  );
};

export default Discover;
