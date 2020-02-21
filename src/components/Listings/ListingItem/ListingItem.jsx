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
  position: relative;
  cursor: pointer;
`;

const Scores = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Add = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  transition: color 0.2s;
  &:hover {
    span.hover {
      color: var(--seed-color-primary) !important;
    }
  }
  span.filled {
    color: var(--seed-color-primary) !important;
  }
`;

const AddButton = props => (
  <Add
    onClick={e => props.dispatchFavorite(e, props.favorite)}
    style={{ position: 'absolute', top: 15, right: 15 }}
  >
    {props.favorite ? (
      <Text className="filled" type="title3">
        &#9829;
      </Text>
    ) : (
      <Text className="hover" type="title3">
        &#9825;
      </Text>
    )}
  </Add>
);

const ListingItem = ({ name, scores, onClick, ...otherProps }) => {
  const { data, dispatch } = useContext(Context);
  const isLoggedIn = data.authenticated || false;
  const dispatchFavorite = (e, remove) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: remove ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
      payload: { favorite: name }
    });
  };
  const isInFavorites = name => {
    return data.favorites.find(
      neighborhood => neighborhood.toLowerCase() === name.toLowerCase()
    );
  };
  const shouldDisplayAdd = isLoggedIn;

  return (
    <Listing onClick={() => onClick(name)} {...otherProps}>
      {shouldDisplayAdd && (
        <AddButton
          favorite={isInFavorites(name)}
          dispatchFavorite={dispatchFavorite}
        />
      )}
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
