import React from 'react';

import Text from 'components/Text';

const ListingItem = ({ name, scores }) => (
  <div>
    <Text type="large">{name}</Text>
  </div>
);

export default ListingItem;
