import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Text from 'components/Text';
import styles from 'components/Navbar/NavItem/navitem.module.scss';

const NavItem = ({ key, url, name, cta = false }) => (
  <Link
    key={key}
    to={url}
    className={cx(styles.navItem, cta && styles.ctaLink)}
  >
    <Text type="large">{name}</Text>
  </Link>
);

export default NavItem;
