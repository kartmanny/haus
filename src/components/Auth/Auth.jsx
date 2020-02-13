import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Form from 'components/Form';
import Text from 'components/Text/Text';
import SwitchSelect from 'components/SwitchSelect';

const AuthContainer = styled.div`
  text-align: center;
  padding: 4rem 8rem 8rem 8rem;
`;

const AuthPage = ({ history }) => {
  const loginSubmitHandler = ({ username, password }) => {
    if (username === 'Kart' && password === 'Manny') {
      history.push('/haus/profile');
    } else {
      alert('Invalid Login Credentials');
    }
  };

  const FORMS = [
    {
      name: 'Login',
      component: (
        <Form
          name="Login"
          cta="Log In"
          onSubmit={loginSubmitHandler}
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
  return (
    <AuthContainer>
      <Text type="title1">Log In or Register</Text>
      <SwitchSelect components={FORMS} />
    </AuthContainer>
  );
};

export default withRouter(AuthPage);
