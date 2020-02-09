import React from 'react';

import Text from '../Text/Text';
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
          <Text type="title2">{name}</Text>
          <div className={styles.heuristicGrid}>
            <span>
              <Text type="large">Haüs Score:</Text>
              <Text type="large" className={styles.score}>
                {score}
              </Text>
            </span>
            <span>
              <Text type="large">Population:</Text>
              <Text type="large" className={styles.score}>
                {population}
              </Text>
            </span>
            <span>
              <Text type="large">School:</Text>
              <Text type="large" className={styles.score}>
                {schools}
              </Text>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoverListings;
