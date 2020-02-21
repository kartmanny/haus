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
  background-color: ${props =>
    props.value in gradeConversion
      ? gradeConversion[props.value]
      : 'var(--seed-color-primary)'};
  text-align: center;
  margin: 0.25rem 1rem;
`;

const gradeConversion = {
  'A-': '#00B3A1',
  A: '#00B3A1',
  'A+': '#20DBC8',
  'B-': '#A7EBB2',
  B: '#81EA91',
  'B+': '#67E57B',
  'C-': '#FFDB5A',
  C: '#FFD12D',
  'C+': '#FFC700',
  'D-': '#FFB18A',
  D: '#FFA579',
  'D+': '#FF9356',
  'F-': '#FF5A5F',
  F: '#FF7579',
  'F+': '#F4868A'
};

const Grade = ({ value, offset = false }) => (
  <Circle value={value}>
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
