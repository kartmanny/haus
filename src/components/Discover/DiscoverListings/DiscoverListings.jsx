import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import styles from 'components/Discover/DiscoverListings/discover-listings.module.scss';

const LISTINGS = [
  { name: 'Queen Anne', score: 97, population: 3500, schools: 'A+' },
  { name: 'West Queen Anne', score: 95, population: 4000, schools: 'A-' },
  { name: 'South Lake Union', score: 85, population: 3750, schools: 'A-' },
  { name: 'Westlake', score: 78, population: 1500, schools: 'B+' },
  { name: 'Capitol Hill', score: 75, population: 2500, schools: 'A+' }
];

const Listings = styled.div`
  margin-right: 5rem;
`;

const ListItem = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  border-radius: 1rem;
  padding: 2rem 4rem;
  border: 1px solid var(--seed-text-body);
  margin: 15px 0;
  cursor: pointer;
`;

const ScoreGrid = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr 1fr;
`;

const DiscoverListings = () => {
  return (
    <Listings>
      {LISTINGS.map(({ name, score, population, schools }) => (
        <ListItem key={name}>
          <Text type="title2">{name}</Text>
          <ScoreGrid>
            <ScoreItem title="Haüs Score" score={score} />
            <ScoreItem title="Population" score={population} />
            <ScoreItem title="School" score={schools} />
          </ScoreGrid>
        </ListItem>
      ))}
    </Listings>
  );
};

const ScoreItem = ({ title, score }) => (
  <span>
    <Text type="large">{`${title}:`}</Text>
    <Text type="large" className={styles.score}>
      {score}
    </Text>
  </span>
);

export default DiscoverListings;
