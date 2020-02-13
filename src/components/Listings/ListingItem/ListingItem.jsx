import React from 'react';

import Text from 'components/Text';

const ListingItem = ({ name, scores }) => {
  return (
    <div>
      <Text type="large">{name}</Text>
      <div>
        {scores.map(({ name, value }) => (
          <span>
            <Text type="large" capitalize={true}>
              {name}:
            </Text>
            <Text type="regular" capitalize={true}>
              {value}
            </Text>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ListingItem;
