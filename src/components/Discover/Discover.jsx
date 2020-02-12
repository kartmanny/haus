import React from 'react';
import styled from 'styled-components';

import Listings from 'components/Listings';
import Dashboard from 'components/Dashboard';
import Text from 'components/Text';
import Map from 'components/Map';

const dashboardTitle = {
  name: 'WestLake',
  price: '50,000',
  population: '2,000',
  overall: 'A+'
};

const reportCard = [
  { name: 'Median Home Value', score: 'A+', type: 'A' },
  { name: 'Average Rent', score: 'B+', type: 'B' },
  { name: 'Appreciation Score', score: 'A+', type: 'A' },
  { name: 'Schools', score: 'C+', type: 'C' },
  { name: 'Population', score: 'A+', type: 'A' },
  { name: 'Diversity', score: 'D+', type: 'D' },
  { name: 'Walk Score', score: 'F+', type: 'F' }
];
const _data = {
  barData: [79565, 55322],
  pieData: [42.2, 26.5, 17.1, 3.2, 11],
  lineData: [200000, 250000, 400000, 420000, 500000, 380000, 600000]
};
const DiscoverGrid = styled.div`
  display: grid;
  padding: 2rem 2rem 4rem;
  max-width: 1360px;
  margin: auto;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 10fr;
  align-items: center;
  grid-column-gap: 15rem;
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
      <DiscoverContainer>
        <Text type="title1">Seattle</Text>
        <Map />
      </DiscoverContainer>
      <Dashboard
        dashboardTitle={dashboardTitle}
        reportCard={reportCard}
        data={_data}
      ></Dashboard>
      <Listings listings={LISTINGS} />
    </DiscoverGrid>
  );
};

export default Discover;
