import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from 'assets/context/Context';

import Text from 'components/Text';
import Grade from 'components/Grade';

const Listing = styled.div`
  padding: 2.5rem;
  border: 2px solid var(--seed-border-light);
  border-radius: 1rem;
  margin: 1rem auto 1rem 0;
  position: relative
  cursor: pointer;
`;

const Scores = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const AddButton = ({ onClick }) => {
  return (
    <Text
      onClick={onClick}
      type="title3"
      style={{ position: 'absolute', top: 15, right: 15 }}
    >
      +
    </Text>
  );
};

const ListingItem = ({ name, scores, onClick, ...otherProps }) => {
  const { dispatch } = useContext(Context);
  return (
    <Listing onClick={() => onClick(name)} {...otherProps}>
      <AddButton
        onClick={e => {
          e.stopPropagation();
          dispatch({ type: 'ADD_FAVORITE', payload: { favorite: name } });
        }}
      />
      <Text type="title2">{name}</Text>
      <Scores>
        {scores.map(({ name, score }, index) => (
          <span key={index}>
            <Text type="large" capitalize={true}>
              {name}:
            </Text>
            <Grade value={score} />
          </span>
        ))}
      </Scores>
    </Listing>
  );
};

export default ListingItem;
