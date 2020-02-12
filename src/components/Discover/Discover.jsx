import React from 'react';

import DiscoverListings from 'components/Discover/DiscoverListings';
import Text from 'components/Text';
import Map from 'components/Map';

import styles from 'components/Discover/discover.module.scss';

const Discover = () => {
  return (
    <div className={styles.discoverGrid}>
      <div className={styles.discoverContainer}>
        <h2 className={styles.discoverTitle}>
          <Text type="title1">Seattle</Text>
        </h2>
        <Map />
      </div>
      <DiscoverListings />
    </div>
  );
};

export default Discover;
