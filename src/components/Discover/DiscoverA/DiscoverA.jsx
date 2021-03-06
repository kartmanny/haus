import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
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
  grid-template-rows: 1fr 5fr;
  align-items: center;
  grid-column-gap: 15rem;
  justify-items: center;
`;

const DiscoverA = ({ history, match = null, prefix = '', current }) => {
  const onDashboardClose = () => {
    setView(listings);
    setCurrentNeighborhood('');
  };
  const changeView = neighborhood => {
    setView(
      <Dashboard onClose={onDashboardClose} neighborhood={neighborhood} />
    );
    history.push(`/haus/discover${prefix}/${neighborhood}`);
    setCurrentNeighborhood(neighborhood);
  };
  const listings = <Listings onListingClick={changeView} />;

  const [currentNeighborhood, setCurrentNeighborhood] = useState(
    match.params.neighborhood
  );
  const [view, setView] = useState(
    currentNeighborhood ? (
      <Dashboard
        onClose={onDashboardClose}
        neighborhood={currentNeighborhood}
      />
    ) : (
      listings
    )
  );

  return (
    <DiscoverGrid>
      <Text type="title1">
        Seattle
        <Text type="large">
          Select one of the neighborhoods on the map, or click one of the menu
          items on the right to see details about a neighborhood
        </Text>
      </Text>
      <Text type="title1">Neighborhoods</Text>
      <Map
        current={[currentNeighborhood]}
        prefix={prefix}
        onNeighborhoodPress={changeView}
      />
      {view}
    </DiscoverGrid>
  );
};

export default withRouter(DiscoverA);
