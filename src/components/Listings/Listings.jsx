import React, { useContext } from 'react';

import Context from 'assets/context/Context';
import ListingItem from 'components/Listings/ListingItem';
import styles from 'components/Listings/listings.module.scss';

const Listings = ({ onListingClick, ...otherProps }) => {
  const { data } = useContext(Context);
  return (
    <div style={{ height: 650, overflowY: 'scroll' }}>
      {data.neighborhoods.map(({ name, report }, index) => (
        <ListingItem
          className={styles.card}
          onClick={onListingClick}
          key={index}
          name={name}
          scores={report.slice(0, 3)}
          {...otherProps}
        />
      ))}
    </div>
  );
};

export default Listings;
