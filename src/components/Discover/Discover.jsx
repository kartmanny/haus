import React from 'react';
import styled from 'styled-components';

import Listings from 'components/Listings';
import Text from 'components/Text';
import Map from 'components/Map';

const DiscoverGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const DiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LISTINGS = [
  {
    name: 'Queen Anne',
    scores: [
      { name: 'score', value: 97 },
      { name: 'population', value: 3500 },
      { name: 'schools', value: 'A+' }
    ]
  },
  {
    name: 'West Queen Anne',
    scores: [
      { name: 'score', value: 95 },
      { name: 'population', value: 4000 },
      { name: 'schools', value: 'A-' }
    ]
  },
  {
    name: 'South Lake Union',
    scores: [
      { name: 'score', value: 85 },
      { name: 'population', value: 3750 },
      { name: 'schools', value: 'A-' }
    ]
  },
  {
    name: 'Westlake',
    scores: [
      { name: 'score', value: 78 },
      { name: 'population', value: 1500 },
      { name: 'schools', value: 'B+' }
    ]
  },
  {
    name: 'Capitol Hill',
    scores: [
      { name: 'score', value: 75 },
      { name: 'population', value: 2500 },
      { name: 'schools', value: 'A+' }
    ]
  }
];

const Discover = () => {
  return (
    <DiscoverGrid>
      <DiscoverContainer>
        <Text type="title1">Seattle</Text>
        <Map />
      </DiscoverContainer>
      <Listings listings={LISTINGS} />
    </DiscoverGrid>
  );
};

export default Discover;
