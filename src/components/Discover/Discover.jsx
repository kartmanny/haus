import React from 'react';
import styled from 'styled-components';

import DiscoverListings from 'components/Discover/DiscoverListings';
import Dashboard from 'components/Dashboard/Dashboard';
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

const Discover = () => {
  return (
    <DiscoverGrid>
      <DiscoverContainer>
        <Text type="title1">Seattle</Text>
        <Map />
      </DiscoverContainer>
      <Dashboard dashboardTitle={dashboardTitle} reportCard={reportCard}></Dashboard>
    </DiscoverGrid>
  );
};

export default Discover;
