import React from 'react';
import cx from 'classnames';
import classes from './grade.module.scss';
import Text from '../Text/Text';
/*
 * @param type   "A" | "B" | "C" | "D" | "F"
 */
const Grade = ({ type, children, className }) => {
    return <Text type="regular" className={cx(className, classes[type])}> {children}</Text>;
};

export default Grade;
