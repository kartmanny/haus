import React from 'react';
import styled from 'styled-components';

import Listings from 'components/Listings';
import Text from 'components/Text';
import Map from 'components/Map';

const DiscoverGrid = styled.div`
  display: grid;
  padding: 2rem 2rem 4rem;
  max-width: 1360px;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 10fr;
  align-items: center;
  justify-items: center;
`;
const LISTINGS = [
  {
    name: 'Queen Anne',
    scores: [
      { name: 'score', value: 'A+' },
      { name: 'schools', value: 'A' },
      { name: 'population', value: 'A-' }
    ]
  },
  {
    name: 'West Queen Anne',
    scores: [
      { name: 'score', value: 'B+' },
      { name: 'schools', value: 'B' },
      { name: 'population', value: 'B-' }
    ]
  },
  {
    name: 'South Lake Union',
    scores: [
      { name: 'score', value: 'C+' },
      { name: 'schools', value: 'C' },
      { name: 'population', value: 'C-' }
    ]
  },
  {
    name: 'Westlake',
    scores: [
      { name: 'score', value: 'D+' },
      { name: 'schools', value: 'D' },
      { name: 'population', value: 'D-' }
    ]
  }
];

const Discover = () => {
  return (
    <DiscoverGrid>
      <Text type="title1">Seattle</Text>
      <Text type="title1">Neighborhoods</Text>
      <Map />
      <Listings listings={LISTINGS} />
    </DiscoverGrid>
  );
};

export default Discover;
