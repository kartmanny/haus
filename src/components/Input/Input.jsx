import React, { useState } from 'react';
import cx from 'classnames';
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
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Container>
      <label
        className={cx(styles.label, (active || !!value) && styles.active)}
        htmlFor={name}
      >
        <Text type="large" className={styles.capitalize}>
          {name}
        </Text>
      </label>
      <input
        className={cx(styles.input, active && styles.active)}
        type={type}
        onFocus={() => setActive(true)}
        onChange={e => {
          setValue(e.target.value);
        }}
        onBlur={() => setActive(false)}
        id={name}
        name={name}
        {...otherProps}
      />
    </Container>
  );
};

export default Input;
