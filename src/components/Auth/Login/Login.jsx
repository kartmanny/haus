import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text/Text';
import styles from 'components/Auth/Login/login.module.scss';

const Container = styled.div`
  padding: 2rem;
  border: 2px solid var(--seed-border-light);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 40rem;
`;

const SubmitButton = styled.button`
  border: 1px solid var(--seed-color-primary);
  padding: 0.5rem 2rem;
  color: white;
  background-color: var(--seed-color-primary);
  border-radius: 0.6rem;
  margin-top: 2rem;
`;

const LoginForm = () => {
  return (
    <Container>
      <Text type="title3">Login</Text>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <SubmitButton>
        <Text type="large" className={styles.loginButton}>
          Log In
        </Text>
      </SubmitButton>
    </Container>
  );
};

export default LoginForm;
