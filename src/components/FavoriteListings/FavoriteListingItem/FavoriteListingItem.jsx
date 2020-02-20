import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import Grade from 'components/Grade';
import swal from '@sweetalert/with-react'

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
  <Text type="regular" className={styles.add} onClick={() => {
    swal({
      title: 'Are you sure?',
      content: <Text type="large"> <b>{name}</b> will be deleted from your Favorites. </Text>,
      buttons: true,
      icon: 'warning',
    }).then((toDelete) => {
      if (toDelete) {
        swal({
          icon: "success",
          title: "Deleted!",
          content: <Text type="large"> <b>{name}</b> was successfully removed from Favorites.</Text>
        });
        handleDelete();
      }
    });
  }}>
    x
  </Text>
);

class FavoriteListingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, scores: this.props.scores}
  }
  render() {
    const { ...otherProps } = this.props;
    return (
      <Listing {...otherProps}>

        <div className={styles.header}>
          <Text type="title2">{this.state.name}</Text>
          <DeleteButton handleDelete={this.props.handleDelete} name={this.state.name} />
        </div>
        <Scores>
          {this.state.scores.map(({ name, value }, index) => (
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
  }

}

export default FavoriteListingItem;
