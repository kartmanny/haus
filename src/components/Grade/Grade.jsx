import React from 'react';
import cx from 'classnames';

import styled from 'styled-components';
import styles from 'components/Grade/grade.module.scss';

const Circle = styled.span`
  font-size: 2rem;
  color: white;
  font-weight: 500;
  border-radius: 50%;
  height: 4rem;
  display: inline-block;
  width: 4rem;
  background-color: var(--seed-color-primary);
  text-align: center;
  margin: 0.25rem 1rem;
`;

const Grade = ({ value, offset = false }) => (
  <Circle>
    <span
      className={cx(
        styles.gradeText,
        value.length > 1 && offset && styles.offset
      )}
    >
      {value}
    </span>
  </Circle>
);

export default Grade;
