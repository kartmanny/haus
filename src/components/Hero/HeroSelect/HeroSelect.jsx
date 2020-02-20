import React from 'react';
import cx from 'classnames';

import Text from 'components/Text';

import styles from 'components/Hero/HeroSelect/heroselect.module.scss';

const HeroSelect = ({ onClick }) => {
  return (
    <div className={styles.heroSelectContainer}>
      <div
        onClick={onClick}
        className={cx(styles.sweepright, styles.heroSelectCard)}
      >
        <Text type="large" className={styles.heroSelectText}>
          Seattle
        </Text>
      </div>
      <a href="#" className={cx(styles.sweepright, styles.construction)}>
        <Text
          type="large"
          className={cx(styles.heroSelectText, styles.constructionText)}
        >
          San Diego
        </Text>
      </a>
      <a href="#" className={cx(styles.sweepright, styles.construction)}>
        <Text
          type="large"
          className={cx(styles.heroSelectText, styles.constructionText)}
        >
          New York
        </Text>
      </a>
    </div>
  );
};

export default HeroSelect;
