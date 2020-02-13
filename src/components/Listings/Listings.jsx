import React from 'react';

import ListingItem from 'components/Listings/ListingItem';

const Listings = ({ listings }) => (
  <div>
    {listings.map(({ name, scores }, index) => (
      <ListingItem key={index} name={name} scores={scores} />
    ))}
  </div>
);

export default Listings;
