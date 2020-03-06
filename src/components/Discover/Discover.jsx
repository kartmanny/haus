import React from 'react';
import DiscoverA from 'components/Discover/DiscoverA';
import DiscoverB from 'components/Discover/DiscoverB';

const Discover = ({ ...otherProps }) => {
  const pathTokens = window.location.pathname.split('/');
  pathTokens.forEach(token => token.toLowerCase());
  if (typeof pathTokens[2] === 'string') {
    switch (pathTokens[2]) {
      case 'discover_a':
        return <DiscoverB prefix="_b" />;
      case 'discover_b':
        return <DiscoverA prefix="_a" />;
      default:
        return <DiscoverB prefix="_b" />;
    }
  }
};

export default Discover;
