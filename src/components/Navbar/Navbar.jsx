import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/img/logo.svg';

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

const Navbar = ({ routes, history }) => {
  return (
    <Nav>
      <NavItemList>
        <Logo />
        {routes
          .filter(route => route.render)
          .map(({ url, name, cta, onClick }, index) => (
            <NavItem
              key={index}
              url={url}
              cta={cta}
              name={name}
              onClick={() => {
                if (typeof onClick === 'function') onClick();
                if (name === 'Logout') history.push('/');
                window.ga(
                  'send',
                  'event',
                  'Page Navigation',
                  'User moved to new page'
                );
              }}
            />
          ))}
      </NavItemList>
    </Nav>
  );
};

const Logo = () => (
  <Link className={styles.logoContainer} to="/">
    <img height={80} src={logo} alt="Haus logo" />
  </Link>
);

export default withRouter(Navbar);
