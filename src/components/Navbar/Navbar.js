import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.scss';

const Navbar = ({ items }) => (
  <nav className={styles.navbar}>
    <ul className={styles.navItemList}>
      <Link className={styles.logoContainer} to="/">
        <div className={styles.logo}>
          <span className={styles.logoCenter}></span>
        </div>
        <h2 className={styles.logoText}>Haüs</h2>
      </Link>
      {items.map(item => (
        <Link to={`/${item.url}`} className={styles.navItem}>
          {item.name}
        </Link>
      ))}
    </ul>
  </nav>
);

export default Navbar;
