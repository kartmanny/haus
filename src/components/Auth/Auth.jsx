import React from 'react';
import styled from 'styled-components';

import Login from 'components/Auth/Login';
import Register from 'components/Auth/Register';
import Text from 'components/Text/Text';
import SwitchSelect from 'components/SwitchSelect';

const AuthContainer = styled.div`
  text-align: center;
  padding: 4rem 8rem 8rem 8rem;
`;

const COMPONENTS = [
  { name: 'Login', component: <Login /> },
  { name: 'Register', component: <Register /> }
];

const AuthPage = () => {
  return (
    <AuthContainer>
      <Text type="title1">Auth Page</Text>
      <SwitchSelect components={COMPONENTS} />
    </AuthContainer>
  );
};

export default AuthPage;
