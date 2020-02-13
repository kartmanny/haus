import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import Listings from 'components/Listings';
import Map from 'components/Map';

const Profile = styled.div`
  padding: 15rem;
  padding: 4rem 8rem 8rem 8rem;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 5rem;
`;

const ProfileGridCell = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  justify-items: center;
`;

const FAVORITES = [
  {
    name: 'Queen Anne',
    scores: [
      { name: 'score', value: 'A+' },
      { name: 'schools', value: 'A' },
      { name: 'population', value: 'A-' }
    ]
  },
  {
    name: 'West Queen Anne',
    scores: [
      { name: 'score', value: 'B+' },
      { name: 'schools', value: 'B' },
      { name: 'population', value: 'B-' }
    ]
  },
  {
    name: 'South Lake Union',
    scores: [
      { name: 'score', value: 'C+' },
      { name: 'schools', value: 'C' },
      { name: 'population', value: 'C-' }
    ]
  }
];

const ProfileComponent = () => (
  <Profile>
    <Text type="title1">Welcome, Kart</Text>
    <ProfileGrid>
      <ProfileGridCell>
        <Text type="title2">Seattle</Text>
        <Map />
      </ProfileGridCell>
      <ProfileGridCell>
        <Text type="title2">Favorited Neighborhoods</Text>
        <Listings listings={FAVORITES} />
      </ProfileGridCell>
    </ProfileGrid>
  </Profile>
);

export default ProfileComponent;
