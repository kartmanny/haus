import React from 'react';

import ListingItem from 'components/Listings/ListingItem';
import styles from 'components/Listings/listings.module.scss';

const Listings = ({ listings, ...otherProps }) => (
  <div>
    {listings.map(({ name, scores }, index) => (
      <ListingItem className={styles.card} key={index} name={name} scores={scores} {...otherProps} />
    ))}
  </div>
);

export default Listings;
