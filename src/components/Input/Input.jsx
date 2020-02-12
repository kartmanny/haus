import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import styles from 'components/Input/input.module.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 2rem 0;
`;

const Input = ({ name, type, ...otherProps }) => {
  return (
    <Container>
      <label className={styles.label} htmlFor={name}>
        <Text type="regular">{name}</Text>
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        {...otherProps}
      />
    </Container>
  );
};

export default Input;
