import React from 'react';
import styles from './discover.module.scss';

const LISTINGS = [
  { name: 'Neighborhood 1 name', score: 97, population: 3500, schools: 'A+' },
  { name: 'Neighborhood 2 name', score: 95, population: 4000, schools: 'A-' },
  { name: 'Neighborhood 3 name', score: 85, population: 3750, schools: 'A-' },
  { name: 'Neighborhood 4 name', score: 78, population: 1500, schools: 'B+' },
  { name: 'Neighborhood 5 name', score: 75, population: 2500, schools: 'A+' }
];

const DiscoverListings = () => {
  return (
    <div className={styles.discoverListingsContainer}>
      {LISTINGS.map(({ name, score, population, schools }) => (
        <div className={styles.discoverListing}>
          <span className={styles.listingTitle}>{name}</span>
          <div className={styles.heuristicGrid}>
            <span>
              Haüs Score:
              <span className={styles.listingHeuristic}>{score}</span>
            </span>
            <span>
              Population:
              <span className={styles.listingHeuristic}>{population}</span>
            </span>
            <span>
              Schools:<span className={styles.listingHeuristic}>{schools}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoverListings;
