import React from 'react';
import styled from 'styled-components';

import washington from 'assets/img/washington.svg';
import outline from 'assets/img/outline.svg';

import Text from 'components/Text';
import styles from 'components/Footer/footer.module.scss';

const FooterWrapper = styled.footer`
  display: grid;
  min-height: 20rem;
  grid-template-columns: 25rem 1fr 25rem;
  grid-column-gap: 15rem;
  background-color: var(--seed-color-primary);
  flex-direction: column;
  color: var(--seed-white);
  place-items: center;
  padding: 4rem;
  margin-top: auto;
  grid-template-areas: '. footer';
`;

const FooterContainer = styled.div`
  grid-area: footer;
`;

const SpaceNeedle = styled.img`
  height: 350px;
  margin-left: auto;
  margin-right: 3rem;
`;

const SeattleOutline = styled.img`
  margin-left: auto;
  margin-right: 3rem;
  height: 350px;
`;

const FOOTER_TEXT = `Your home's location is super important. There's no need to have tons of tabs open just to compare various listings and neighborhoods when you're trying to find your dream home. With Haüs, you'll be able to find the perfect neighborhood for your home – give it a try! Search up a city and we'll do the rest.`;

const Footer = () => {
  return (
    <FooterWrapper>
      <SpaceNeedle src={washington} alt="Space Needle" />
      <FooterContainer>
        <Text type="title1" className={styles.footerTitle}>
          Haüs
        </Text>
        <Text type="large" className={styles.footerText}>
          {FOOTER_TEXT}
        </Text>
      </FooterContainer>
      <SeattleOutline src={outline} alt="Seattle" />
    </FooterWrapper>
  );
};

export default Footer;
