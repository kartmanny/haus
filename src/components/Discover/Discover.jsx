import React, { useState } from 'react';
import styled from 'styled-components';

import Listings from 'components/Listings';
import Dashboard from 'components/Dashboard';
import Text from 'components/Text';
import Map from 'components/Map';

import data from 'assets/data/data.json';

const {
  info: dashboardTitle,
  report: reportCard,
  chartData: _data,
  listings
} = data.dashboard;

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
  const [view, setView] = useState(<Listings listings={listings} />);
  return (
    <DiscoverGrid>
      <Text type="title1">Seattle</Text>
      <Text type="title1">Neighborhoods</Text>
      <Map
        onClick={() =>
          setView(
            <Dashboard
              onClose={() => setView(<Listings listings={listings} />)}
              dashboardTitle={dashboardTitle}
              reportCard={reportCard}
              data={_data}
            />
          )
        }
      />
      {view}
    </DiscoverGrid>
  );
};

export default Discover;
