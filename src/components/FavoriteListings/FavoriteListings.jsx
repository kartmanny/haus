import React, { useContext } from 'react';

import Context from 'assets/context/Context';
import FavoriteListingItem from 'components/FavoriteListings/FavoriteListingItem';
import styles from 'components/Listings/listings.module.scss';

const FavoritesListings = ({ ...otherProps }) => {
  const { data, dispatch } = useContext(Context);
  const handleDelete = name => {
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: {
        favorite: name
      }
    });
  };
  const entries = [];
  (data.favorites || []).forEach(favorite => {
    const entry = data.neighborhoods.find(el => el.name === favorite);
    if (entry) {
      entries.push(entry);
    }
  });
  return (
    <div>
      {entries.map(favorite => (
        <FavoriteListingItem
          handleDelete={() => handleDelete(favorite.name)}
          className={styles.card}
          key={favorite.name}
          name={favorite.name}
          scores={favorite.report.slice(0, 3)}
          {...otherProps}
        />
      ))}
    </div>
  );
};

export default FavoritesListings;
