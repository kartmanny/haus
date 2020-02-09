import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Text from '../Text/Text';

import styles from './navbar.module.scss';

const Navbar = ({ routes }) => (
  <nav className={styles.navbar}>
    <ul className={styles.navItemList}>
      <Link className={styles.logoContainer} to="/">
        <div className={styles.logo}>
          <span className={styles.logoCenter}></span>
        </div>
        <Text type="title2" className={styles.logoText}>
          Haüs
        </Text>
      </Link>
      {routes.map(route => (
        <Link
          to={`/${route.url}`}
          className={cx(route.cta && styles.ctaLink, styles.navItem)}
        >
          <Text type="large">{route.name}</Text>
        </Link>
      ))}
    </ul>
  </nav>
);

export default Navbar;
