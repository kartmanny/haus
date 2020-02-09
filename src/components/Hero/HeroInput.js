import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Text from '../Text/Text';

import search from '../../assets/img/search.svg';
import styles from './hero.module.scss';

const HeroInput = ({ id, placeholder }) => {
  const handleOnChange = event => {
    const value = event.target.value;
    setValue(value);
    if (value) {
      setIsActive(true);
    }
  };
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setIsActive(!!value);
  }, [value]);

  return (
    <div className={styles.heroInputContainer}>
      <label
        className={cx(styles.heroInputPlaceholder, isActive && styles.active)}
        htmlFor={id}
      >
        <Text type="large">{placeholder}</Text>
      </label>
      <input
        id={id}
        className={cx(styles.heroInput, isActive && styles.activeBorder)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(!!value)}
        onChange={handleOnChange}
        type="text"
        required
      />
      <Link to="/haus/discover">
        <img
          className={cx(styles.heroButton, styles.search)}
          src={search}
          height={25}
          alt="search"
        />
      </Link>
    </div>
  );
};

export default HeroInput;
