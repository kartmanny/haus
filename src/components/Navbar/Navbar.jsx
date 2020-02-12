import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Text from 'components/Text';
import NavItem from 'components/Navbar/NavItem';
import styles from 'components/Navbar/navbar.module.scss';

const Nav = styled.nav`
  margin: 2rem;
`;

const NavItemList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Navbar = ({ routes }) => (
  <Nav>
    <NavItemList>
      <Logo />
      {routes.map(({ url, name, cta }, index) => (
        <NavItem key={index} url={url} cta={cta} name={name} />
      ))}
    </NavItemList>
  </Nav>
);

const Logo = () => (
  <Link className={styles.logoContainer} to="/">
    <div className={styles.logo}>
      <span className={styles.logoCenter}></span>
    </div>
    <Text type="title2" className={styles.logoText}>
      Haüs
    </Text>
  </Link>
);

export default Navbar;
