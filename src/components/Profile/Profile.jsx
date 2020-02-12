import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
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

const ProfileComponent = () => (
  <Profile>
    <Text type="title1">Welcome, User</Text>
    <ProfileGrid>
      <Map />
    </ProfileGrid>
  </Profile>
);

export default ProfileComponent;
