import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import logo from 'assets/img/logo.svg';
import HeroSelect from 'components/Hero/HeroSelect';
import Text from 'components/Text';
import styles from 'components/Hero/hero.module.scss';

const HeroContainer = styled.div`
  display: grid;
  grid-column-gap: 5rem;
  align-items: center;
  justify-content: center;
  place-items: center;
  padding: 15rem;
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const HeroTitleLogo = styled.div`
  display: inline-flex;
  align-items: center;
  margin: auto;
  transform: translateX(-20px);
`;

const Hero = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const beginLoading = () => {
    setLoading(true);
    window.ga('send', 'event', 'Page Navigation', 'User moved to new page');
    setTimeout(() => history.push('/haus/discover_a'), 1250);
  };
  return (
    <HeroContainer>
      {loading ? (
        <Loader type="Circles" color="#ff5a5f" height={250} width={250} />
      ) : (
        <>
          <HeroDiv>
            <HeroTitleLogo>
              <img height={150} src={logo} alt="" />
              <h1 className={styles.heroTitle}>Orio</h1>
            </HeroTitleLogo>
            <Text type="title3" className={styles.heroSubtitle}>
              We're here to help you find the perfect neighborhood for your next
              home. Select one of our available cities below to get started:
            </Text>
          </HeroDiv>
          <HeroSelect onClick={beginLoading} />
        </>
      )}
    </HeroContainer>
  );
};

export default withRouter(Hero);
