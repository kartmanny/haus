import React from 'react';
import styled from 'styled-components';

import Dashboard from 'components/Dashboard/Dashboard';
import Listings from 'components/Listings';
import Text from 'components/Text';
import Map from 'components/Map';

const dashboardTitle = {name: 'WestLake', price: '50,000', population: '2,000', overall: 'A+'}
const reportCard = [
  { name: 'Median Home Value', score: 'A+', type: 'A' },
  { name: 'Average Rent', score: 'B+', type: 'B' },
  { name: 'Appreciation Score', score: 'A+', type: 'A' },
  { name: 'Schools', score: 'C+', type: 'C' },
  { name: 'Population', score: 'A+', type: 'A' },
  { name: 'Diversity', score: 'D+', type: 'D' },
  { name: 'Walk Score', score: 'F+', type: 'F' },
]
const _data = { 
  barData: [79565, 55322], 
  pieData: [42.2, 26.5, 17.1, 3.2, 11], 
  lineData: [200000, 250000, 400000, 420000, 500000, 380000, 600000]
}
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
    scores: [{ score: 97 }, { population: 3500 }, { schools: 'A+' }]
  },
  {
    name: 'West Queen Anne',
    scores: [{ score: 95 }, { population: 4000 }, { schools: 'A-' }]
  },
  {
    name: 'South Lake Union',
    scores: [{ score: 85 }, { population: 3750 }, { schools: 'A-' }]
  },
  {
    name: 'Westlake',
    scores: [{ score: 78 }, { population: 1500 }, { schools: 'B+' }]
  },
  {
    name: 'Capitol Hill',
    scores: [{ score: 75 }, { population: 2500 }, { schools: 'A+' }]
  }
];

const Discover = () => {
  return (
    <DiscoverGrid>
      <DiscoverContainer>
        <Text type="title1">Seattle</Text>
        <Map />
      </DiscoverContainer>
      <Dashboard dashboardTitle={dashboardTitle} reportCard={reportCard} data={_data}></Dashboard>
      <Listings listings={LISTINGS} />
    </DiscoverGrid>
  );
};

export default Discover;
