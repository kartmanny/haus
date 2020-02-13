import React from 'react';
import cx from 'classnames';
import styles from 'components/Text/text.module.scss';

/*
 * @param type   "title1" | "title2" | "title3" | "large" | "regular" | "small"
 */
const Text = ({ type, children, className, capitalize = false }) => {
  return (
    <span
      className={cx(className, styles[type], capitalize && styles.capitalize)}
    >
      {children}
    </span>
  );
};

export default Text;
