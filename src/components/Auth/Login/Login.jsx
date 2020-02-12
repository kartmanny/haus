import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text/Text';
import Input from 'components/Input';
import styles from 'components/Auth/Login/login.module.scss';

const Container = styled.div`
  padding: 2rem 5rem;
  border: 2px solid var(--seed-border-light);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 30rem;
`;

const SubmitButton = styled.button`
  border: 1px solid var(--seed-color-primary);
  padding: 0.5rem 2rem;
  color: white;
  background-color: var(--seed-color-primary);
  border-radius: 0.6rem;
  margin-top: 2rem;
  cursor: pointer;
  outline: none;
`;

const LoginForm = () => {
  return (
    <Container>
      <Text type="title3">Login</Text>
      <Input name="username" type="text" />
      <Input name="password" type="password" />
      <SubmitButton>
        <Text type="large" className={styles.loginButton}>
          Log In
        </Text>
      </SubmitButton>
    </Container>
  );
};

export default LoginForm;
