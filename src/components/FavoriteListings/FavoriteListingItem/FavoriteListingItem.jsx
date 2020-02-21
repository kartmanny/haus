import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import Grade from 'components/Grade';
import swal from '@sweetalert/with-react';

import styles from 'components/FavoriteListings/FavoriteListingItem/favoritelistingitem.module.scss';
import './themes.scss';

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

const DeleteButton = ({ handleDelete, name }) => (
  <Text
    type="large"
    className={styles.add}
    onClick={event => {
      event.stopPropagation();
      swal({
        title: 'Are you sure?',
        content: (
          <Text type="large">
            <b>{name}</b> will be deleted from your Favorites.
          </Text>
        ),
        buttons: true,
        icon: 'warning'
      }).then(toDelete => {
        if (toDelete) {
          swal({
            icon: 'success',
            title: 'Deleted!',
            content: (
              <Text type="large">
                <b>{name}</b> was successfully removed from Favorites.
              </Text>
            )
          });
          handleDelete();
        }
      });
    }}
  >
    x
  </Text>
);

const FavoritesListingItem = ({
  name,
  scores,
  handleDelete,
  ...otherProps
}) => {
  return (
    <Listing {...otherProps}>
      <div className={styles.header}>
        <Text type="title2">{name}</Text>
        <DeleteButton handleDelete={handleDelete} name={name} />
      </div>
      <Scores>
        {scores.map(({ name, score }, index) => (
          <span key={index} className={styles.listingGrade}>
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

export default FavoritesListingItem;
