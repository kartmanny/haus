import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Text from '../Text/Text';

import search from '../../assets/img/search.svg';
import styles from './hero.module.scss';

const HeroInput = ({ id, placeholder }) => {
  const linkRef = useRef(null);
  const handleOnChange = event => {
    const value = event.target.value;
    setValue(value);
    if (value) {
      setIsActive(true);
    }
  };

  const onKeyPress = event => {
    const isEnterKeyPressed = event.nativeEvent.keyCode === 13;
    if (isEnterKeyPressed) {
      linkRef.current.click();
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
        onKeyPress={onKeyPress}
        onBlur={() => setIsActive(!!value)}
        onChange={handleOnChange}
        type="text"
        required
      />
      <Link ref={linkRef} to="/haus/discover">
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
