import React from 'react';
import styled from 'styled-components';

import DiscoverListings from 'components/Discover/DiscoverListings';
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

const Discover = () => {
  return (
    <DiscoverGrid>
      <DiscoverContainer>
        <Text type="title1">Seattle</Text>
        <Map />
      </DiscoverContainer>
      <DiscoverListings />
    </DiscoverGrid>
  );
};

export default Discover;
