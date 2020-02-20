import React from 'react';

import FavoriteListingItem from 'components/FavoriteListings/FavoriteListingItem';
import styles from 'components/Listings/listings.module.scss';

class FavoriteListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listings: this.props.listings }
  }

  delete(item) {
    const newData = this.state.listings.filter(searchItem => searchItem.name !== item);
    this.setState({listings: newData});
  }

  render() {
    const {...otherProps} = this.props;
    return (
      <div>
        {this.state.listings.map(({ name, scores}) => (
          <FavoriteListingItem handleDelete={this.delete.bind(this, name)} className={styles.card} key={name} name={name} scores={scores} {...otherProps}/>
        ))}
      </div>
    )
  }
}

export default FavoriteListings;
