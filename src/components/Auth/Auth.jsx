import React from 'react';
import styled from 'styled-components';

import Form from 'components/Form';
import Text from 'components/Text/Text';
import SwitchSelect from 'components/SwitchSelect';

const AuthContainer = styled.div`
  text-align: center;
  padding: 4rem 8rem 8rem 8rem;
`;

const FORMS = [
  {
    name: 'Login',
    component: (
      <Form
        name="Login"
        cta="Log In"
        inputs={[
          { name: 'username', type: 'text' },
          { name: 'password', type: 'password' }
        ]}
      />
    )
  },
  {
    name: 'Register',
    component: (
      <Form
        name="Register"
        cta="Register"
        inputs={[
          { name: 'email', type: 'email' },
          { name: 'username', type: 'text' },
          { name: 'password', type: 'password' }
        ]}
      />
    )
  }
];

const AuthPage = () => {
  return (
    <AuthContainer>
      <Text type="title1">Log In or Register</Text>
      <SwitchSelect components={FORMS} />
    </AuthContainer>
  );
};

export default AuthPage;
