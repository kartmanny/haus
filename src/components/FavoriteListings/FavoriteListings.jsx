import React, { useContext } from 'react';

import Context from 'assets/context/Context';
import FavoriteListingItem from 'components/FavoriteListings/FavoriteListingItem';
import styles from 'components/Listings/listings.module.scss';

const FavoritesListings = ({ favorites, ...otherProps }) => {
  const { dispatch } = useContext(Context);
  const handleDelete = name => {
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: {
        favorite: name
      }
    });
  };
  return (
    <div>
      {favorites.map(favorite => (
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
