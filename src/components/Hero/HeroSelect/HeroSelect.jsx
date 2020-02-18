import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Text from 'components/Text';

import styles from 'components/Hero/HeroSelect/heroselect.module.scss';

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
        <div className={styles.heroSelectContainer}>
            <Link className={cx(styles.sweepright, styles.heroSelectCard)} ref={linkRef} to="/haus/discover">
                <Text type="large" className={styles.heroSelectText}> Seattle  </Text>
            </Link>
            <a className={cx(styles.sweepright, styles.construction)}>
                <Text type="large" className={cx(styles.heroSelectText, styles.constructionText)}> San Diego  </Text>
            </a>
            <a className={cx(styles.sweepright, styles.construction)}>
                <Text type="large" className={cx(styles.heroSelectText, styles.constructionText)}> New York </Text>
            </a>
        </div>
    );
};

export default HeroInput;
