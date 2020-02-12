import React from 'react';
import styled from 'styled-components';

import ListingItem from 'components/Listings/ListingItem';

const ListingsContainer = styled.div`
  margin-right: 5rem;
`;

const Listings = ({ listings }) => (
  <ListingsContainer>
    {listings.map(({ name, scores }, index) => (
      <ListingItem key={index} name={name} scores={scores} />
    ))}
  </ListingsContainer>
);

export default Listings;
