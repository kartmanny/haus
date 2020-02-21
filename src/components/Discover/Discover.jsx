import React, { useState } from 'react';
import styled from 'styled-components';

import Listings from 'components/Listings';
import Dashboard from 'components/Dashboard';
import Text from 'components/Text';
import Map from 'components/Map';

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

const Discover = () => {
  const onDashboardClose = () => {
    setView(listings);
    setCurrentNeighborhood('');
  };
  const changeView = neighborhood => {
    setView(
      <Dashboard onClose={onDashboardClose} neighborhood={neighborhood} />
    );
    setCurrentNeighborhood(neighborhood);
  };
  const listings = <Listings onListingClick={changeView} />;

  const [view, setView] = useState(listings);
  const [currentNeighborhood, setCurrentNeighborhood] = useState();

  return (
    <DiscoverGrid>
      <Text type="title1">Seattle</Text>
      <Text type="title1">Neighborhoods</Text>
      <Map current={currentNeighborhood} onNeighborhoodPress={changeView} />
      {view}
    </DiscoverGrid>
  );
};

export default Discover;
