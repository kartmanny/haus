import React from 'react';
import styles from './discover.module.scss';

const LISTINGS = [
  { name: 'Queen Anne', score: 97, population: 3500, schools: 'A+' },
  { name: 'West Queen Anne', score: 95, population: 4000, schools: 'A-' },
  { name: 'South Lake Union', score: 85, population: 3750, schools: 'A-' },
  { name: 'Westlake', score: 78, population: 1500, schools: 'B+' },
  { name: 'Capitol Hill', score: 75, population: 2500, schools: 'A+' }
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
