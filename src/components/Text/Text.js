import React from 'react';
import cx from 'classnames';
import classes from './text.module.scss';

/*
 * @param type   "title1" | "title2" | "title3" | "large" | "regular" | "small"
 */
const Text = ({ type, children, className }) => {
  return <span className={cx(className, classes[type])}>{children}</span>;
};

export default Text;
