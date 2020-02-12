import React from 'react';
import styled from 'styled-components';

import HeroInput from 'components/Hero/HeroInput';
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

const Hero = () => {
  return (
    <HeroContainer>
      <HeroDiv>
        <h1 className={styles.heroTitle}>Haüs</h1>
        <Text type="title3" className={styles.heroSubtitle}>
          We'll help you find the perfect neighborhood.
        </Text>
      </HeroDiv>
      <HeroInput placeholder="Search for a city" id="heroInput" />
    </HeroContainer>
  );
};

export default Hero;
