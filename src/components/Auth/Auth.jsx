import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import Context from 'assets/context/Context';

import Form from 'components/Form';
import Text from 'components/Text/Text';
import SwitchSelect from 'components/SwitchSelect';

const AuthContainer = styled.div`
  text-align: center;
  padding: 4rem 8rem 8rem 8rem;
`;

const AuthPage = ({ history }) => {
  const { data, dispatch } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const loginSubmitHandler = ({ username, password }) => {
    if (username !== 'Kart' || password !== 'Manny') {
      alert('Invalid Login Credentials');
    } else {
      setLoading(true);
      setTimeout(() => {
        dispatch({ type: 'LOGIN' });
        history.push('/haus/profile');
      }, 1250);
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
    }
  ];
  return (
    <AuthContainer>
      <Text type="title1" style={{ marginBottom: '3rem' }}>
        Log In or Register
      </Text>
      {loading ? (
        <Loader type="Circles" color="#ff5a5f" height={250} width={250} />
      ) : (
        <SwitchSelect components={FORMS} />
      )}
    </AuthContainer>
  );
};

export default withRouter(AuthPage);
