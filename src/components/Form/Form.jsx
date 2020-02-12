import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text/Text';
import Input from 'components/Input';
import styles from 'components/Form/form.module.scss';

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

const Form = ({ name, cta, inputs }) => {
  return (
    <Container>
      <Text type="title3" className={styles.marginBottom}>
        {name}
      </Text>
      {inputs.map(({ name, type }, index) => (
        <Input key={index} name={name} type={type} />
      ))}
      <SubmitButton>
        <Text type="large" className={styles.loginButton}>
          {cta}
        </Text>
      </SubmitButton>
    </Container>
  );
};

export default Form;
