import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from 'components/Dashboard';
import Text from 'components/Text';
import SwitchSelect from 'components/SwitchSelect';
import Listings from 'components/Listings';
import Map from 'components/Map';

const DiscoverGrid = styled.div`
  display: grid;
  padding: 2rem 2rem 4rem;
  max-width: 1360px;
  margin: auto;
  grid-template-columns: ${props => (props.expand ? '1fr 1fr' : '1fr')};
  align-items: center;
  grid-column-gap: 15rem;
  justify-items: center;
`;

const DiscoverB = ({ history, match = null, prefix = '', current }) => {
  const onDashboardClose = () => {
    setView(false);
    history.push(`/haus/discover${prefix}/`);
    setCurrentNeighborhood('');
  };
  const changeView = neighborhood => {
    setView(
      <Dashboard onClose={onDashboardClose} neighborhood={neighborhood} />
    );
    history.push(`/haus/discover${prefix}/${neighborhood}`);
    setCurrentNeighborhood(neighborhood);
  };

  const [currentNeighborhood, setCurrentNeighborhood] = useState(
    match.params.neighborhood
  );
  const [view, setView] = useState(false);

  return (
    <DiscoverGrid expand={view}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <Text type="title1">Seattle</Text>
        <Text type="large">
          Select one of the neighborhoods on the map to see more details
        </Text>
        <SwitchSelect
          components={[
            {
              name: 'Map',
              component: (
                <Map
                  current={[currentNeighborhood]}
                  prefix={prefix}
                  onNeighborhoodPress={changeView}
                />
              )
            },
            {
              name: 'Neighborhoods',
              component: <Listings onListingClick={changeView} />
            }
          ]}
        />
      </div>
      {view && (
        <Dashboard
          onClose={onDashboardClose}
          neighborhood={currentNeighborhood}
        />
      )}
    </DiscoverGrid>
  );
};

export default withRouter(DiscoverB);
