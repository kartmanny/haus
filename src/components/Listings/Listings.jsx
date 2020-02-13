import React from 'react';

import ListingItem from 'components/Listings/ListingItem';

const Listings = ({ listings, ...otherProps }) => (
  <div>
    {listings.map(({ name, scores }, index) => (
      <ListingItem key={index} name={name} scores={scores} {...otherProps} />
    ))}
  </div>
);

export default Listings;
