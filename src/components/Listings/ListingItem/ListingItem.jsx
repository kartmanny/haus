import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import Grade from 'components/Grade';

const Listing = styled.div`
  padding: 2.5rem;
  border: 2px solid var(--seed-border-light);
  border-radius: 1rem;
  margin: 1rem auto 1rem 0;
  width: 100%;
  cursor: pointer;
`;

const Scores = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ListingItem = ({ name, scores, ...otherProps }) => {
  return (
    <Listing {...otherProps}>
      <Text type="title2">{name}</Text>
      <Scores>
        {scores.map(({ name, value }, index) => (
          <span key={index}>
            <Text type="large" capitalize={true}>
              {name}:
            </Text>
            <Grade value={value} />
          </span>
        ))}
      </Scores>
    </Listing>
  );
};

export default ListingItem;
