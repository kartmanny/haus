import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import cx from 'classnames';
import styles from 'components/Map/map.module.scss';
// import { ga } from 'react-ga';

const Map = ({
  history,
  current: currentNeighborhods = [],
  onNeighborhoodPress: onPress = () => 1,
  prefix = ''
}) => {
  const onNeighborhoodPress = name => {
    window.ga('send', 'event', 'Map Click', 'Neighborhood clicked on map');
    onPress(name);
    setCurrent([name]);
  };
  const [current, setCurrent] = useState(
    currentNeighborhods.map(str => {
      if (typeof str === 'string')
        return str
          .toLowerCase()
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      else return undefined;
    })
  );

  const shouldBeHighlighted = neighborhoodName => {
    return current.find(neighborhood => neighborhood === neighborhoodName);
  };
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 300 500"
      className={styles.svg}
      style={{ enableBackground: 'new 0 0 300 500' }}
    >
      <g id="Layer_1" className={styles.st0}>
        <g className={styles.st1}>
          <polyline
            className={styles.st2}
            points="75.3,151.9 72.2,151.3 70.6,150.3 		"
          />
          <path
            className={styles.st2}
            d="M73.8,151.6l0.3-1.5l2.5-0.6v-2h2.3v1.2h1.3l-0.6-1.2h1.1l2.6,1.3l-0.6,0.6l3.9,3.8l0.6,0.6l1.3-1.3l1.9,1.9
        L91,155l-0.6,1.3l2.6,2.6v0.6l2.6,1.3l1.3-0.7h3.3l1.8,0.6l1.8,0.6l1.8,1.2l3.7,4.3l1.2,0.6v0.6l14.7,11.6l9.2,5.5l1.2-1.2
        l3.7,0.6h0.6l0,0h1.2v-0.2l3.5,1.2l3.7,3.1c0,0,1.9,4.3,3.7,2.4c1.8-1.9,3.1-3.1,2.4-4.3s-0.6-1.2,0.6-2.5
        c1.2-1.2,1.2-1.2,1.2-1.2l-0.6-1.2l1.2-0.6l0.6-1.2l1.8-2.5l2.5-3.1l4.9-1.6h3.7l2.5,1.6l3.1,3.1l5,4.3l1.9,1.2l1.9,1.5h4.3h5.3"
          />
          <path
            className={styles.st2}
            d="M195.2,186l-10.5-0.1c0,0-1.8,2.5,0,3.7c1.9,1.2,1.9,1.8,1.9,1.8l-3.1,1.9l-1.8,2.5c0,0-0.6,0.6-1.2,0
        c-0.6-0.6-1.2-0.6-1.2-0.6s0-0.6-0.6-0.6s-3.1-3.1-3.1-3.1l0.6-6.2c0,0-5.6-10.5-6.9-9.8c-1.2,0.6-1.9,0-2.5,1.3s-1.8,3.1-1.8,3.1
        l-1.2,1.9l1.2,1.2l-3.1,3.7l-0.6,4.3c-1.8,1.9-3.1,2.5-3.7,4.3s1.3,2.5,1.3,2.5v0.7h-1.2v1.2h1.2v6.2l1.8,3.1h0.6v3.1l-1.2-1.2
        l-1.2,0.6l-1.2-1.2l3,3.7l-1.7,2.5l-3.5,3.1v1.1l-1.3,1.2l-0.6-1.2l-0.5,0.6v2.5l-2.3,0.6V222h-3.5v3.1l-2.4-3.7v-3.7l-0.6-0.6
        l0.6-4.9l1.2-0.6v-0.8l-1.3-0.6l0.6-5.7l-4.4-10.1l-2.5-3.8H136l-4.4-4.4l-15-10.7h-3.7l-5.6-5v-1.9l-2.7-3.6h-3.2v2.3h-1.2V165
        H99v4.7l-8.2,0.1v-5.9h5.7l-5.6-0.6l-3.7-3.7l-5-3.7l-7.4-0.6l-3.1-2.5"
          />
          <line
            className={styles.st2}
            x1="98.9"
            y1="165.5"
            x2="98.8"
            y2="159.6"
          />
          <line
            className={styles.st2}
            x1="131.8"
            y1="185.1"
            x2="131.8"
            y2="182.8"
          />
          <line
            className={styles.st2}
            x1="136.5"
            y1="183.9"
            x2="136.5"
            y2="189.8"
          />
          <line
            className={styles.st2}
            x1="166.8"
            y1="173.2"
            x2="166.9"
            y2="175.6"
          />
          <line
            className={styles.st2}
            x1="170.6"
            y1="172.9"
            x2="168.7"
            y2="175.4"
          />
          <line
            className={styles.st2}
            x1="176.4"
            y1="193.1"
            x2="183"
            y2="193.3"
          />
          <line
            className={styles.st2}
            x1="190.3"
            y1="184.8"
            x2="190.4"
            y2="185.9"
          />
          <path
            className={styles.st2}
            d="M144.3,367.6l1.8-1.2l-1.3-6.1l-1.8-0.6l0.6-1.8h3.4l-0.6-2.3h-3.7l-2.8-8.1v-1.8l-2.5-3.7l1.2-9.8l-1.2-1.2
        l-0.6,1.8c0,0-1.8,1.8-3.7,0c-1.8-1.8-1.8-1.8-1.8-1.8h-3.1l4.3,4.3c0,0-0.6,1.8,0.6,4.3c1.2,2.4,2.5,4.9,2.5,4.9l-3,2.5l0.6,1.8
        l-0.6,5.5c0,0-1.8-0.6,1.2,2.4c3.1,3,4.9,4.9,6.1,3.6c1.2-1.2,1.2,0,1.2,0L144.3,367.6z"
          />
          <path
            className={styles.st2}
            d="M137.8,355.5c0,0-0.7-6.2-1.9-4.9s-1.2,3.7-1.2,3.7l0.6,1.8c0,0,1.3,2.5,2.5,1.8c1.2-0.6,2.5-1.3,2.5-1.3
        l-0.6-1.2L137.8,355.5z"
          />
          <path
            className={styles.st2}
            d="M136.6,132.4c0,0,3.1,3.1,3.1,4.3s0,1.9,0,1.9l3.7,0.6c0,0,3.7-3.1,4.9-3.7c1.2-0.6,6.7-9.3,6.7-9.3l4.3-0.6
        c0,0-3.1-1.8-1.9-3.7s0-1.9,0-1.9s-0.6-1.2-1.9-0.6s-1.2,1.2-2.5,0c-1.2-1.2-1.2,0-2.5-1.8c-1.2-1.8-1.3-4.3-3.1-3.7
        c-1.8,0.6-2.5,2.5-2.4,3.7c0,1.2,1.9,2.5,0,3.1c-1.8,0.6-1.8,0.6-3.1,1.3c-1.2,0.6-0.6,1.2-1.8,0.6s0-1.2-1.2,0s-2.4,7.4-2.4,7.4
        s1.2,0,0,0.6C135.3,131.2,136.6,132.4,136.6,132.4z"
          />
          <line
            className={styles.st2}
            x1="237.3"
            y1="479"
            x2="266.6"
            y2="478.8"
          />
          <path
            className={styles.st2}
            d="M262.3,450.7h2.6l-1.9,7h4v-2.3h-0.7c0-0.1-0.6-1.3-0.6-1.9s0.6-1.2,0.6-1.2l-1.6-5.6v-2.5l14,0.5l-4.3-3.7
        l-4.9-0.6l-2.5-0.6l-2.5-0.9h-1.2c0,0-1.9-2.2-5-5.3c-3.1-3.1-2.5-4.9-2.5-4.9l-7.4-4.9h-0.6l-0.6-1.2l-1.2,0.6l-1.9-3.1l1.8-2.5
        c0,0,0,0,1.9,0.6s0,0,0.6-1.9s-0.7-6.8-1.3-8s-3.1-0.6-2.5-1.8c0.6-1.2,0-0.6-0.6-3.7s-1.3-6.2,0-7.4c1.2-1.2,2.4-3.7,2.4-6.8
        c0-3.1-1.2-1.8,0.6-3.1s3.7-6.2,4.3-6.8c0.6-0.6,0-1.9,0-1.9s-0.6-2.5,0.6-4.9c1.2-2.5,0-1.2,3.1-1.3s8-3.1,9.2-4.4
        c1.2-1.2,1.8-3.7,1.8-3.7l-0.5-4.3v-5.6c0,0-4.5-4.9-4.5-5.5s-1.9-2.5-1.9-2.5l-4.3,1.3c0,0-1.8,1.9-1.2,5s1.3,3.7,1.4,5.6v2.5
        c-0.1,0,0.5,0.6,1.1,2.5c0.6,1.8-1.8,1.2-3.7,1.9c-1.8,0.6-1.2,2.5-1.2,3.1h-1.9c0-0.7-1.3-3.7-1.3-4.4c0-0.6-0.6-0.6-1.2-1.8
        c-0.6-1.2-0.6-0.6,0-3.7s-0.6-1.2-1.9-3.7l-0.6-1.2c0,0-0.6-1.8-1.3-4.3c-0.6-2.5,0-1.9-1.9-0.6c-1.8,1.2-1.9-0.6-3.1-3.1
        c-1.3-2.5-1.2-1.2,0-1.9c1.2-0.6,1.2-1.9,1.2-1.9s-1.2-1.2-1.3-3.1c0-1.9,0-0.6-3.1-1.8c-2.1-0.8-2.2-0.5-2.1-0.2
        c-0.5-0.7-2-2.6-3.5-4c-1.9-1.8-2.5-1.2-2.5-1.2l-0.6-1.8c0,0-0.6-0.6-1.2,1.9c-0.6,2.5-1.8,1.2-2.5,0c-0.6-1.2-0.6-2.5-0.6-4.9
        c0-2.5-1.9-4.3-1.9-4.3s-3.2-10.5-3.8-11.7s-1.9-1.2-3.1-3.7c-1.3-2.5,1.2-3.1,1.8-3.7s0-2.5,0.6-5.6s-0.6-3.1-0.6-3.1
        s-0.6-0.6-1.9-3.1s0-1.2,0.6-3.7s0-1.9,0.6-4.9c0.6-3.1,0-3.1,0-3.7s1.8-5.6,3-7.4c1.2-1.9,1.2-1.9,0.6-4.9
        c-0.6-3.1,1.2-7.4,1.8-12.4s0-1.2,0.6-3.1c0.6-1.9,1.8-6.2,1.8-8c0-1.9,0.6-6.2-1.3-8c-1.9-1.8-1.2-1.2-1.9-4.3
        c-0.6-3.1,0.6-3.1,1.8-5.6s1.8-1.9,2.4-3.7s2.5-3.1,2.5-3.1l0.6-4.3c0,0,1.2-0.6,1.2-1.9c0-1.2-0.6-1.8-0.6-1.8L226,207l1.2-3.9
        h-1.4V201c-0.2-0.4-0.6-0.9-0.7-1.4c-0.1-0.5-0.2-0.9-0.2-1.4c0-0.4,0-0.7,0.2-1.1c0.1-0.4,0.3-0.8,0.6-1.1l-1-2
        c0,0-3.7-0.6-4.3,0.6c-0.6,1.2,0,0-3.1-0.6s-1.2,0-1.9-0.6s0-2.5-1.9-3.7s-0.6,0.6-0.6,2.5s-0.6,0-1.8,1.2s-1.9,0-1.9,0l4.3-5.6
        c0,0-1.8,0.6-2.5,0.6s-2.5-3.1-2.5-2.5s-2.5,1.3-4.3,1.9c-1.8,0.6-0.6,0,0,1.2s1.9,0.6,1.2,1.2s-1.2,2.5-1.2,2.5l2.5,1.8l-3.1-0.6
        l1.9,1.8l-1.2,0.2h-2.5l0.6-1.2l-1.2-0.6l1.2-0.6c0,0,0.6-1.2,0.6-1.9s0-3.1-1.2-2.5c-0.3,0.2-0.5,0.2-0.6,0.3v2.2l-1.2,0.6
        l-1.2-0.6c0,0-0.6,0,0-1.9s1.7-1.9,2.9-2.5s0.6,0,1.2-0.6c0.6-0.6,0-0.6,0-0.6s-0.6-0.6-1.2,0s-4.7,1.3-4.7,1.3l-2-1.3v-1.8h2.3
        v-1.5l1-4.4h1.2l1.2-3.5h1.3l0.6-1.2h-2.5l-1.7,2.9l-1.8-1.2l1.2-1.8l1.2-2.9l1.8,1.7v-1.2h1.3c0,0,0.6,0,0,0.6s-1.8,1.3-0.6,1.2
        c1.2,0,3.1,0,4.3-0.6s3.1-1.9,3.7-1.9c0.6,0,2.5-0.6,1.8-1.3c-0.6-0.6-1.2,0-1.2-1.9s0-0.6,1.2-0.6s0.6,0.6,1.2,1.2s0,0.6,0,1.9
        c0,1.2,0.6,0.6,2.5,1.2c1.8,0.6,0.6-0.6,2.5,0.6s2.5,0.6,1.9,1.8s0-0.6,0.6,2.5s0.6,0.6,1.2,1.2c0.6,0.6,0,0.6,0.6,1.9
        c0.6,1.2,1.2,0.6,1.2,2.5s1.9,3.1,3.7,1.2c1.8-1.9,0.6-2.5,0.6-2.5s-3.1-4.9-1.3-6.2s1.8-0.6,3.1-1.9c1.2-1.2,0-1.9,2.4-3.7
        s1.8-0.6,3.7-2.5s1.8-6.8,1.8-9.3s0.6-4.3,1.8-5s4.9-1.3,6.8-2.5c1.8-1.3,9.8-10,9.8-10s0.6-1.2,1.2-3.7s2.4-2.5,2.4-2.5v-3.7
        c0,0,0.6,0.6,1.2-0.6c0.6-1.2,4.3-8.7,4.2-11.2s-3.7-5.6-3.7-5.6l-9.3-4.3c0,0-1.2,0-3.1,0.6c-1.8,0.6-6.2,0-6.2,0
        s-0.6-2.5-2.5-3.1c-1.8-0.6-3.1-3.7-3.1-3.7l-5.6-5.5l0.6-0.6c0,0-0.6-0.6-1.2-1.9c-0.6-1.2-0.6-1.9,0-4.3
        c0.6-2.5-0.7-6.8-1.3-9.3s-2.5-2.5-1.9-4.3c0.6-1.9-0.6-4.3-0.6-4.3s-1.3-4.9-1.9-6.8c-0.6-1.9,0.6-1.9,0.6-1.9l-3.2-13
        c0,0-0.6-1.2-2.5-2.5s-0.6-3.7,0.6-9.9l-2.5-8c0,0,0,0,0.6-1.2s0-2.5,0-2.5l-2.5-3.1l-2.5-1.2L99.7,21.4c0,0,0,0,0.6,1.2
        s1.3,4.9,1.9,8.7s-1.2,6.8-3,11.8s-0.6,6.8-0.6,9.3s-1.2,5-3.6,8.7c-2.4,3.7-1.2,4.3-1.2,7.4s-3,5-6.1,8.7S68.7,87.9,65,91.6
        l-0.6,0.6c0,0-0.6,3.7-1.8,3.7S62,97.1,60.8,99l4.4,6.8l-1.8,7.4l1.2,0.6v4.4l-2.6,4.7h-0.7l-2.6,5.9v1.2h-3.5v1.7l2.4,1.8v1.9
        l1.2,0.6l0.6,1.2l-0.6,0.6l1.8,1.2c0,0,0.6,0.6,0.6,1.8s0,0.6,1.2,3.7c1.2,3,1.8,2.4,1.8,2.4l7.4,3.6v2.3l-3-0.6l-2.4-1.8
        l-6.1-0.6l-1.8-1.2l0.6-3.7c0,0,0-3.7-1.2-4.3s-3-0.6-4.9,0s-4.3,0.6-4.9,1.2l-3,3.1c-0.6,0.6-5.5,3.1-6.1,4.3s-1.2,2.4-2.4,3.1
        c-1.2,0.6-3.6,2.5-3.6,2.5s-0.6,1.2-6.1,2.5s-1.8,1.8-1.8,1.8l10.4,6c0,0,0.6,1.2,3.7,4.8c1.1,1.3,1.4,1.8,1.4,1.8
        c1.3,1.1,2.9,2.7,2.9,3.1c0,0.6,0.6,1.8,0.6,1.8l1.2,2.4c1.9,3.6,1.9,6.7,1.9,6.7s-0.6,0-0.6,1.2s-0.6,6.1,0.1,7.9
        c0.6,1.8,6.7,7.9,9.2,10.3s9.8,5.4,11,6.6s7.9,3.6,7.9,3.6s0,1.2,4.9,2.4l4.2-2.5l3.6-0.6v-2h2.3l0.1,12.9h1.2l0.1-10.2h2.3
        l0.1,9.4h1.2l-0.1-11l-0.6-1.9h1.3l1.3,1.9l0.7,10c0,0,5.7,2.5,8.2,3.1s5.7,5.6,6.9,7.5c1.3,1.9,3.2,2.5,4.4,3.1
        c1.3,0.6,2.5,3.1,2.5,3.1l7.6,6.2h-3.3h0.6h3.1l0.6,1.2h-2.5l0.6,1.2h3.9l0.6,1.2l-1.8,0.6l1.2,0.6h2.3l-1.2,0.6l5.3,4.7l-1.8-1.7
        l0.6-0.6l4.1,2.3l-1.8,0.6l0.6,1.2l1.8-0.6l0.6,1.2v2.3l6.1,4.6l-1.3,0.6v1.2l2-0.6l-0.7,1.8h-0.7l0.7,2.3h3l0.6,1.8l-0.6,0.6H145
        v1.2h3.5v1.2h-3.8l-3.7,16.4h6.4v1.2h-6l1.2,0.8l-1.2,1.5h0.2l0.1,15.8l3.5,3.1v1.9l-3.5-1.2l0.1,9.3l-2,4h-1.5l0.6-3.1l-0.6-1.2
        l-0.2-31.8l-4.7,3.8v1.9l-5.8,1.3h-4.7v3.5h2.3v1.4l-2.3,1.3l0.1,14.8l-1.2,1.2l2.5,2.5l0.6-0.6l5.6,6.4h-3.1l-1.9-2.7l-3.1-3.1
        h-4.1l-0.1-15.2H117v-2.3l-5-0.6l0.6-0.6l-3.7-0.6c0,0-3.1,4.1-3.1,3.5s-2.5-0.6-4.4-3.5s-1.2-1.2-2.5-2.9c-1.2-1.7-0.6,0-1.2-1.2
        L95,299c0,0,0-1.8-1.3-2.3c-1.2-0.6-1.2-1.7-1.2-1.7l-0.6-4.7l-1.9-1.2c0,0,0-2.9-2.5-2.9s-6.8,2.4-6.8,3.6S68.4,306.3,66.6,308
        s-10.5,6.5-10.5,6.5s-13,4.2-13.6,5.4c-0.6,1.2,0,2.3,0,2.3l12.4,8.1H53v1.2h2.9c0,0,0,0,1.2,1.2s0,1.8,0,1.8s-0.6,2.5,1.8,4.9
        c2.4,2.4,1.2,0.6,2.4,4.9s1.2,2.4,2.4,3.7c1.2,1.3,3,6.1,4.2,8.6c1.2,2.4,1.2,3.1,1.2,4.9s1.2,2.4,1.2,2.4s2.4,8.6,0.6,9.8
        c-1.7,1.2-0.6,4.9-0.6,4.9l3,5.5l-0.6,3.7c0,0-1.2,0,0,1.8s0,1.8,0,2.5c0,0.6,1.8,1.8,1.8,4.3s-0.6,2.5-4.6,7.4
        c-4.1,4.9-2.3,1.9-1.7,3.7c0.6,1.8,4.1,3,6.5,5.5c2.4,2.4,2.4,3.1,2.4,3.1v3.1h-3.5v1.2h3.7c0,0,0,2.5-1.8,5s-3.7,4.4-4.3,5.6
        c-0.6,1.2-0.6,0.6,1.3,2.5c1.9,1.8,1.9,1.2,3.1,4.9c1.3,3.7,0.6,3.7,2.5,5.6c1.9,1.8,0.6,1.2,1.9,4.3s1.9,2.5,3.8,5.6
        s3.1,4.9,3.1,5.6c0,0.6,3.1,2.5,5,3.1s4.4,3.1,5.6,4.3s1.3,1.9,3.1,3.7l1.8-3.1l1.2-5.6c0,0,2.5-3.7,3.7-5.6s0-5.6,0-7.4
        c0-1.9-0.7-18-0.7-18l14-0.1v3.5h2.3v-3.5l24.6-0.2l1.2,5.8h5.7l0.6-1.8l2.4-0.6l1.2,2.4h3.7l-1.3-4.3l-1.2-1.8l-1.9-6.7h7v4.7
        l8.8-0.6l-0.6-6.4l11.1-0.1l1.7-1.2l-1.2-0.6c0,0,0-1.2,0-1.9c0-0.6-2.4-4.3-2.4-4.3l-7.1-3.7v-1.1H174v-3.3c0,0-8.4-6.1-9-6.7
        s-0.6-1.2-0.6-1.2l-7.5-7.4l-3.1,0.1h1.9l-1.3-2.3h-1.2l-5-6.3l-0.2-3.1V377l0.8-1.2l1.2,0.6l2.5-1.9l-1.2,4.3c0,0-0.6,0.6,0,2.5
        c0.6,1.8,1.9,1.2,1.9,1.2l1.2,0.6c0,0,0.6,0,1.8-0.6s1.9,0,1.9,0l0.6,1.8l-3.1,0.6l3.7,3.7l2.5,0.6l-0.6,1.2l7.5,7.4
        c0,0,0,0.6,2.5-0.6s1.2-3.7,1.2-3.7l1.5,0.6v2.2l-3,3.7l4.9,4.3l14.1-0.7c0,0-0.6,0.6,0.6,1.2c1.2,0.6,4.9,4.9,4.9,4.9
        s1.3,4.9,1.3,6.2s-1.8,1.9-1.8,1.9l14.7-0.1c0,0,0,0-1.2,1.2s-0.4,26-0.4,26l7.3-0.7l9.2,0.6l0.6,3.7c0,0,0,0.6,1.2,1.2
        s3.1,1.2,3.1,1.2v-5.3h6.7l-0.6,15.2h-1.3v2.3h1.3l-1.2,4l0.6,0.7l-0.6,4.7l15.2,0.6l-0.1-12.7l-1.3-2l11.9-0.1l1.9,6.2l10.9-0.7
        v-4.5l-10.5,0.1L262.3,450.7z"
          />
        </g>
      </g>
      <g id="Layer_3">
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Magnolia') && styles.active
          )}
          data-name="Magnolia"
          onClick={event => {
            onNeighborhoodPress('Magnolia');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M57.1,136.5c-0.4,0.1-0.8,0.2-1.2,0.2c-5.3,1.1-8.4,1.8-10.4,4.2c-2.2,2.5-4.8,2.4-6.8,5
      c-2.1,2.6-1.4,5-4.2,5.2s-2.8,0.2-2.8,0.2s-2.6-0.2-5.2,1.9c-2.6,2.1-5.5,1.3,0,6.4s6.9,7.2,6.9,7.2s7,4.2,8.3,5.8
      c1.3,1.6,1.9,0.6,2.8,5.8c0.9,5.2-0.8,4.3,0.7,11.5c1.4,7.2,7.9,13.5,11.8,15.4s16.4,9.7,16.4,9.7s0-0.2,2.4,1.7
      c2.4,1.8,3.5,2.7,5.5,1.7s2.8-1.9,2.8-1.9s0.7-1.1-1.1-1.1s-2.7,0.2-2.7,0.2s-0.1-0.7-1.1-2.7s-0.5-2.3,0-3.8s-0.3-1.5,2.2-4.2
      s10-20.1,10-22.2c0-2.2,0.1-5.3-2.1-8.4s-12.7-15-12.7-15s0.5-1.4,0.8-1.6c0.2-0.2-7.2-3.8-9.2-3.9c-2.1-0.1-2.2-3.8-2.6-4.9
      c-0.3-1.1-1.6-2.7-3.8-3.3c-2.2-0.7-1.4-0.9-2.6-4.7c-1.2-3.8-2.7-4.2-2.7-4.2"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Interbay') && styles.active
          )}
          data-name="Interbay"
          onClick={event => {
            onNeighborhoodPress('Interbay');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M67.9,148.8c0.8,1.6,0.6,3.3,4.8,4.9c4.2,1.6,6.1,2.8,6.2,3.2c0.2,0.3,1,1.9,1,2.2c0,0.3,1.6,2.8,1.6,2.8
      s11.8,13.8,11.9,15.8c0.2,2-0.5,7.5-0.8,9.3c-0.3,1.8-7.7,18.3-9.2,20.5c-1.6,2.2-3.4,3.5-2.7,4.8c0.7,1.3,0.7,1.3,0.7,1.3h2.7
      l2.1,1.9h3.2l1.2,10.1c0,0-0.4,0.7,2.2,0c2.6-0.7,3.6-1.2,4.3-1.4s4.2,1.3,4.2,1.3l3.8,2.5l11.9,10.1c0,0,0.1,0.4,1.7,2.2
      c1.6,1.8,2.2,2.5,2.2,2.5l2.7,0.5v-3.8l-24.8-27.2l0.2-46.8l-1.8-0.6l0.7-5.6c0,0,0.8-0.5-3.4-1.5s-5.8-3.5-8.2-4.4
      c-2.4-0.9-4.2-2.2-7.4-1.3c-3.2,0.8-5.3-0.3-6.3-1.8c-1-1.4-2.9-1.8-3.8-1.8S67.9,148.8,67.9,148.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Queen Anne') && styles.active
          )}
          data-name="Queen Anne"
          onClick={event => {
            onNeighborhoodPress('Queen Anne');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M99.4,160.2v3.8h1.3v31.5h5.6v3H123V195l9.2-3v-8.4c0,0-17.1-9.6-18.1-11.1s-6.6-8.6-8-9.4
      S99.4,160.2,99.4,160.2z"
        />
        <polygon
          className={cx(
            styles.st2,
            shouldBeHighlighted('Lower Queen Anne') && styles.active
          )}
          data-name="Lower Queen Anne"
          onClick={event => {
            onNeighborhoodPress('Lower Queen Anne');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="100.4,197.4 104.5,197.4 104.5,200.2 123.2,200.2 123.6,222.6 139.4,222.6 139.4,230.4 131.5,238.8 
      124.9,238.8 100.4,211.8 	"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('East Queen Anne') && styles.active
          )}
          data-name="East Queen Anne"
          onClick={event => {
            onNeighborhoodPress('East Queen Anne');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M124.5,196.6l0.9,24.5l14.1,0.2l1.1-14.6c0,0-4.1-8-4.7-11.8s-0.4-7.5-0.4-7.5l-1.5-1.6l-0.1,7.1L124.5,196.6z
      "
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Westlake') && styles.active
          )}
          data-name="Westlake"
          onClick={event => {
            onNeighborhoodPress('Westlake');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M134.8,184.4c0,0,4.4,2.5,5.1,3.2s6.8,13.7,7.1,15.4s0.4,18.2,0.4,18.2h-6.3l1-14.9c0,0-4.4-7.7-4.9-14.6
      s-0.4-5.2-0.4-5.2L134.8,184.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('South Lake Union') && styles.active
          )}
          data-name="South Lake Union"
          onClick={event => {
            onNeighborhoodPress('South Lake Union');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M141.1,222.8v8.9l-7.3,7.7H159c0,0,0.4-16.2,0.4-17.4s0.8-3.1,2.9-6.6s3.3-5.6,3.3-5.6h-3.1
      c0,0-3.9-3.4-4.2-5.3s-0.7-4.8-0.7-4.8h-1.9l-0.1,4.6c0,0,0.8,0,1.2,1.9s0.4,8.8,0.4,8.8s-6,4.9-6.2,6.3s-1,1.7-1,1.7L141.1,222.8z
      "
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Belltown') && styles.active
          )}
          data-name="Belltown"
          onClick={event => {
            onNeighborhoodPress('Belltown');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M125.2,240.8v3.3l9.2,8.1l4.5,1.4c0,0,0.8-3.5,2.9-2.7s3.2,2.1,3.2,2.1l13.3-8.8l0.4-3.4H125.2z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Eastlake') && styles.active
          )}
          data-name="Eastlake"
          onClick={event => {
            onNeighborhoodPress('Eastlake');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M156.1,198.5h3.1c0,0,0,3.5,0.6,4.8c0.7,1.2,2,3.1,2.8,3.6c0.8,0.5,1.5,1.2,1.5,1.2h1.9l0.3-34
      c0,0-3.6,3.7-4.4,8.1c-0.8,4.4-1.8,4.9-1.8,4.9s-1.5,0.1-1.6,1.8s-0.3,3-0.8,4.3c-0.5,1.3-1.1,1.3-1.4,3.3S156.1,198.5,156.1,198.5
      z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Portage Bay') && styles.active
          )}
          data-name="Portage Bay"
          onClick={event => {
            onNeighborhoodPress('Portage Bay');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M168.2,173.7l-0.2,19c0,0,7.9,0.5,8-1s-0.2-2.6-0.2-2.6s-0.3-0.2,1-0.9c1.3-0.7,2,0.2,1.5-1.8
      c-0.5-2-1.7-2.6-1.7-2.6s-0.9,0.5-1.2-1c-0.3-1.6-1-2.8-1-3s-1-2.7-2.6-4S168.2,173.7,168.2,173.7z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Montlake') && styles.active
          )}
          data-name="Montlake"
          onClick={event => {
            onNeighborhoodPress('Montlake');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M168,194.7v3.8h1.9v6.3h7.4v-5.8c0,0,3.8,0,5.2,1.1s1.8,2.8,3.2,3.5s-1.1-0.1,2.9,1.2s5,1.7,5.3,2.2
      s1.2,0.6,2.2,1.5s0.8,0.1,1.1,0.9s-1.1-5.4,0.8-7.8s1.4-3.8,2.4-5.9s1.2-0.3,1.4-2.9c0.1-2.6-0.1-4.9,0.6-6.9c0,0,1.1-1.4-1.7-0.7
      s-1.5,0.8-4.9,1.4s-0.3,0.2-5.2-0.2s-5.9-1.5-6.6-1.3s-0.6,1.2-0.6,1.2l0.4,0.8l-0.8,1l0.4,1.8c0,0,1.4,0.5,0.4,1.3
      c-1,0.8-1.4,1-2.2,1.7c-0.8,0.7-0.7,1.1-1.4,0.9s-0.9-0.9-0.9-1.6s0.2-0.4-1.1,0.4s-0.4,0.9-2.1,1.4s0.9,0.1-3.3,0.4
      S168,194.7,168,194.7z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Capitol Hill') && styles.active
          )}
          data-name="Capitol Hill"
          onClick={event => {
            onNeighborhoodPress('Capitol Hill');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M160.7,224.4c0,0-0.3,13.2,0,14.4c0.3,1.1,0.5,1.1-0.6,5.5s-1.1,4.4-1.1,4.4l2.6-1.5l10.4,0.7v2.2h2.8
      l17.2-11.2v-16.7l1.2-1.4v-11.5c-3.1-1.6-1.4-1.8-4.9-2.6s-4-0.3-4.5-1.8s-0.9-1.3-1.6-2.2s-1.9-1.1-2.2-1.1s-0.3,0-0.3,0v5.2
      h-10.8l-0.1-6.3h-1.2l-0.1,10.3c0,0-0.4,1.4-1.2,2.7s-3.6,4.6-4.3,6.5S160.7,224.4,160.7,224.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Madison Valley') && styles.active
          )}
          data-name="Madison Valley"
          onClick={event => {
            onNeighborhoodPress('Madison Valley');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M194.6,209.5c0,0,1.5,1.7,2.4,1.9s1.2,0.8,1.2,0.8s0,2.8,0.8,4.6s3.1,4.5,4.1,5s1.4,0.6,1.4,1.9
      s-0.8,1.8,0,2.6s0.4,0.5,2,1.6s2.8,1.8,3.4,1.9s1.1,0.4,1.1,0.4s-0.6,1.7-1.2,3.1s-1.6,0.9-1.8,3.1s-0.5,2.8-0.5,2.8l-13.7-0.6
      v-15.4l1.3-1.4L194.6,209.5z"
        />
        <path
          className={cx(
            cx(styles.st2),
            shouldBeHighlighted('Central District') && styles.active
          )}
          data-name="Central District"
          onClick={event => {
            onNeighborhoodPress('Central District');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M199.9,240.4l-7.2-0.3l-17,11.3v22.1l3.6,3.9l21,41.8c0,0-0.2-3.1-1.5-6.7s-2.5-2.9-1.8-5.7s0.5-2.9,0.8-6.2
      s0.8-5.2,0.6-8.3s-0.5-4.8-0.1-8.2s1.8-12.1,1.4-15.6s-1.3-7.1-0.6-9.8s1.8-2.1,1.2-6.1S199.9,240.4,199.9,240.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Leschi') && styles.active
          )}
          data-name="Leschi"
          onClick={event => {
            onNeighborhoodPress('Leschi');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M199.8,293.3h14.5c0,0-1.2,0.2-1.2-3.8s0.8-6,0.8-6s0.4-0.9,0.1-3.4s0.3-5,1.1-6.4s2.8-4.9,2.8-7.6
      s0-2.4,0-2.4s-2.2,0.4-2.6-1.9s-0.6-1.5-0.6-1.5l-13.2,0.5c0,0-0.2,14.1-0.5,15.6s-1,5.5-1,8.4S199.8,293.3,199.8,293.3z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Madrona') && styles.active
          )}
          data-name="Madrona"
          onClick={event => {
            onNeighborhoodPress('Madrona');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M201.4,259.3h10.9v-2.2h3.4c0,0,0.2,2.6,1.1,3.9s0.8,1.8,0.8,1.8h0.7l0.8-9.1c0,0-2.6-1-3.2-3.9
      s-1.6-6.4-2.6-7.6s-1.6-1.1-1.8-1.2s-9.5-0.6-9.5-0.6L201.4,259.3z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Denny Blaine') && styles.active
          )}
          data-name="Denny Blaine"
          onClick={event => {
            onNeighborhoodPress('Denny Blaine');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M220.3,251.4c0.4-3.2,1.4-14.2,0.8-16.1s-0.6-1.9-0.6-1.9s0.5-1.1-0.8,0.4s-1.6,1.9-1.6,1.9s0.6,1.4-0.9-0.2
      s-1.8-3.1-2.5-3.8s-0.6-1.5-1.5-0.5s-1,0.8-1.7,2s-0.6,2-1.2,3s-1.1,1.1-1.1,1.9s0.4,0.8,0.4,0.8s2.8,0.1,3.8,1s1.6,1.4,2.1,2.9
      s1.6,4.6,2.2,6.2s0.7,2.5,1.5,2.8S220.3,251.4,220.3,251.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Downtown Waterfront') && styles.active
          )}
          data-name="Downtown Waterfront"
          onClick={event => {
            onNeighborhoodPress('Downtown Waterfront');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M123.9,245.6c-0.2,3.3-0.2,3.3-0.2,3.3s2.2,0.8,3.2,1.9c1.1,1.2,3.8,3.3,5.2,4.1c1.4,0.8,7.2,6,8.1,7.8
      c0.9,1.8,5.6,7.6,4.9,12c-0.7,4.3-0.2,3.8-1.8,7.5c-1.5,3.7-2,4.2-1.9,5.5c0.1,1.2,0.1,1.2,0.1,1.2l8.2,0.4v-15.6l-10.8-17.8
      c0,0-3.4-0.7-5.2-2.4S123.9,245.6,123.9,245.6z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Central Business District') && styles.active
          )}
          data-name="Central Business District"
          onClick={event => {
            onNeighborhoodPress('Central Business District');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M140,255.1l8.8,14l5.1,0.8l3.8,5.3l0.4-4.1l5.2,0.3c0,0-7.9-10.5-8-14.4c-0.1-3.9,2.6-9.9,2.6-9.9l-13.1,7.9
      l-3.6-2.6L140,255.1z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('First Hill') && styles.active
          )}
          data-name="First Hill"
          onClick={event => {
            onNeighborhoodPress('First Hill');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M158.7,251.4c0,0-1.4,1.6-1.1,4.8c0.3,3.2,6,13.2,6,13.2s2.8-2.6,5.8-2.9s4.2-0.3,4.2-0.3v-14.8h-3.1l-0.2-2
      l-9.8,0.6L158.7,251.4z"
        />
        <polygon
          className={cx(
            styles.st2,
            shouldBeHighlighted('Vesler Terrace') && styles.active
          )}
          data-name="Vesler Terrace"
          onClick={event => {
            onNeighborhoodPress('Vesler Terrace');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="164.7,271.6 167.9,274.6 174,274.6 173.6,268.1 170.3,268.1 	"
        />
        <polyline
          className={cx(
            styles.st2,
            shouldBeHighlighted('Pioneer Square') && styles.active
          )}
          data-name="Pioneer Square"
          onClick={event => {
            onNeighborhoodPress('Pioneer Square');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="149.7,270.9 153.2,271.3 158.1,278.2 158.1,289.3 151.6,289.3 151.2,274 149.7,270.2 	"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('International District') && styles.active
          )}
          data-name="International District"
          onClick={event => {
            onNeighborhoodPress('International District');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M159.7,273.5v15.8c0,0,4.8,0.2,6-0.8s4.3-3.3,7-3.8c2.7-0.4,2.9-1.5,5.1,0.2c2.2,1.8,2.1,0.4,3.6,3.7
      s3.2,4.3,3.7,4.6c0.5,0.3,0.5,0.3,0.5,0.3l-6.3-13l-3.4-4.5l-8,0.7l-3.9-3.3H159.7z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Industrial District') && styles.active
          )}
          data-name="Industrial District"
          onClick={event => {
            onNeighborhoodPress('Industrial District');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M141.1,291h20.6c0,0-0.2,0.5,3-0.6c3.2-1.1,3.8-1.6,3.8-1.6s0.9,17.6,1.7,21.3s0.8,7.6,0.5,9.8
      c-0.2,2.2-2.4,22-3,23.9c-0.6,1.9-0.8,3.1-0.7,6.8c0.1,3.7-0.3,3.2,2.3,8.8c2.7,5.6,3.2,6.2,3.2,6.2l-5.2-0.4l-2.8-2.4l-14.8-0.2
      c0,0,0.6-3-2.9-3.4c-3.6-0.4-5.1-1.1-5.7-1c-0.6,0.1-2.2-11-2.6-15s-1.9,0.3,0-6.2c1.9-6.6,2.6-11,2.6-11s0.2-9.5,0.1-13.2
      c-0.2-3.7-0.4-9.8-0.4-12.6c0-2.8-0.7-1.7,0.3-3.8c1-2.2,0.4-2.7-0.1-4.3S141.1,291,141.1,291z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Harbor Island') && styles.active
          )}
          data-name="Harbor Island"
          onClick={event => {
            onNeighborhoodPress('Harbor Island');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M130.8,298.8c0,0,1.8-1.6,2.8-3.4c1.1-1.8,0.8-1.1,2.5-2.1c1.8-1,0.9,15.5,1.4,16.8c0.5,1.2,0.7-0.2,0.6,2.5
      c-0.1,2.7-1.1,10.8-0.6,12.3c0.5,1.6,1.6,2.3,1.6,2.3l-2.5,8.5c0,0-0.8-0.1-1.7,0s-0.9-1.5-3-2.6c-2.1-1.1-4.4-3.7-5.9-6.4
      s-0.4-1.8-2.4-2.8s-2.7,0.2-2.2-3.7c0.4-3.9-0.1-8.2-0.1-8.2s1-0.7,1-2c0-1.3-0.9-1.7-1-4.5c-0.1-2.8-0.9-7.5,0.5-9.2
      c1.4-1.7,2-2.4,3.1-0.8c1.1,1.6,1.8,3.8,1.8,3.8c1.3-0.2,0.2-0.7,1.2-2c1-1.3,1.6-1.1,1.7,0.5c0.1,1.6-1,2.2,0.1,1.6
      S130.8,298.8,130.8,298.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Industrial District 2') && styles.active
          )}
          data-name="Industrial District 2"
          onClick={event => {
            onNeighborhoodPress('Industrial District 2');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M118.6,325.2c0.1-0.2-0.2-16.8-1.1-18.6s-0.9-1.9-0.9-1.9l-3.7-0.5c0,0-4.3-1.2-4.7,0.6s-1.6,1.6-1.6,1.6
      s-0.6,0.5-2.2-1.1s-11.6-11.3-11.8-16.8s-0.6-1.8-0.6-1.8l-0.7,1.4l0.6,3.1c0,0,1.4,4.5,2.6,5.7s3.3,4.9,4.6,6.2s2.7,1.9,3.3,3.7
      s0.9,2.8,1.8,6.5s2.9,9.4,2.9,11.9s0.2,4.6,0.2,4.6h10.9c0,0,1.6-0.2,3.2,0.4s3.9-0.6,5.9,6.6s3.8,9.4,3.6,12.8s-2.9,4.9-2.9,4.9
      l7,7.2c0,0,1.7,4.3,1.7,5.5s-0.1,4.7,1.2,6.2s1.3,1.3,1,2.6c-0.2,1.3-0.7,3.6,1.8,8.6s2.4,5.1,2.4,5.1l6.9,1.3c0,0,0.2-2.2,0.8-3.1
      s0.5-1.2,0.5-1.2s-3.2-4.9-5.9-14s-7.3-16.3-8.7-17.4s0-7.8-1.4-11.2s-2.2-1.9-3-5.1s-0.5-1.8-0.2-2.6s-0.6-1.9-3.3-4
      s-3.6-2.2-4.5-3.6s-3-3.6-5-3.7S118.6,325.2,118.6,325.2z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('North Admiral') && styles.active
          )}
          data-name="North Admiral"
          onClick={event => {
            onNeighborhoodPress('North Admiral');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M86.6,288.1c0,0,0.2,2.1-1,3.4s-2.6,1.2-3.4,2.9s-1.4,3.1-2.7,4.8s-1.6,2.3-4.8,4.3s-4.8,2.7-5.9,4.4
      s-1.6,1.8-2,4.3s-0.2,2.5-0.8,3s2.1-0.4,2.9,0.5s1.5,0.1-0.6,2s-3-0.4-2.7,2.9s1.2,4.1,0.6,7.3s-0.8,2.8-0.7,3.6
      c0.1,0.8,28.2,0.9,28.2,0.9h9.2c0,0,1.6-1.4,2.4-2.4s0.4-0.1,0-3.8s-3.2-15.6-3.6-17.2s1-0.4-1.2-2.4s-3.6-4.9-5.1-6.8
      s-2.3-3.1-3.4-5s0.1-0.6-2.1-3.1s-2.8-3.6-2.8-3.6"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Alki') && styles.active
          )}
          data-name="Alki"
          onClick={event => {
            onNeighborhoodPress('Alki');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M90.7,285c-1.5,2.4-1.3,1.5-1.5,2.6c-0.1,1.2-1.3-3.8-2.9-2.4s-1.8,2.1-1.8,2.6c0,0.5-0.5,3.2-1.3,3.9
      c-0.9,0.7-1.3,0.1-2.7,2s-2.4,4.5-3.8,5.8s-5.2,2.7-7.5,4.9c-2.3,2.2-3.5,5.2-4.1,7.5c-0.6,2.3-1.1,3.8-0.7,4.6
      c0.4,0.8-0.5,5.4-0.5,5.4l0.5,2.6c0,0,0.2,3,0,3.7s-1.3,0.8-1.1,2.8s-1.7,2.5,1.4,3.2c3.1,0.7,4.8,0,4.8,0l-0.2,12.3l1.3,2l0.2,2.2
      l-0.2,4.2c0,0,0.1-3.8-2.8-4.5c-2.8-0.8-4.5-0.7-4.5-0.7l-0.5,1.2c0,0-2.3,0.2-3-2.8c-0.7-3.1-2.3-4.7-3.8-8.1
      c-1.4-3.4,0.5-4.1-1.9-6.6c-2.4-2.5-12.8-6.9-11.1-11.2s0.5-3,1.8-4.2s2.2-1.4,5.8-2.7s5-2,7.9-4s2.4-0.8,5.2-3.5
      c2.7-2.7,3.4-3.5,5.2-5.3s2.9-3.1,3.8-4.6c0.9-1.5-0.2,0.3,2.5-3.1c2.7-3.4,3.3-4.1,4.8-6.7c1.4-2.6-1.3-2.9,3.5-4
      c4.8-1.2,6.2,0,6.2,0L90.7,285z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Genesee') && styles.active
          )}
          data-name="Genesee"
          onClick={event => {
            onNeighborhoodPress('Genesee');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M71.6,333.8l-0.5,12.3l1.2,0.8v6.1h19.3c0,0,0.6-3.4,0.9-4.3c0.3-0.9-0.6,0,2.8-2.6c3.3-2.6,4.9-2.9,5.2-4.7
      c0.3-1.8,0.8-1.9,1.1-4.3c0.2-2.4,0.2-2.4,0.2-2.4s-0.8-1-2-0.9c-1.2,0.1-2.5,0-3.2,0.3c-0.7,0.3-0.8,0.9-2,1.2
      c-1.2,0.3-1.7,0.4-2.2-0.6S71.6,333.8,71.6,333.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Seaview') && styles.active
          )}
          data-name="Seaview"
          onClick={event => {
            onNeighborhoodPress('Seaview');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M63.9,353v3.8c0,0,1.9,0.4,3,2.7s1.4,3.1,1.2,4s0.4,1.2,1,2.2c0.6,0.9,0.6,0.6,0.7,2.6s0.4,1.6,0.7,3.2
      c0.2,1.6,1,0.2-0.4,4.8s-3.2,2.9-1.1,7.2c2.2,4.3,2.2,4.3,2.2,4.3l0.5,1.2l1.2,0.3l3.3-5.1l4.5-0.2v-2.9l4.2-0.6l0.4-25.7H73.6
      l-0.6,3.4h-1.9c0,0-1.1-2-2.2-3.4c-1.1-1.4-1.9-3.9-3.4-2.9C63.9,353,63.9,353,63.9,353z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Fairmount Park') && styles.active
          )}
          data-name="Fairmount Park"
          onClick={event => {
            onNeighborhoodPress('Fairmount Park');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M86.5,380.8c0,0,1.7-0.5,2.9-1.8s9.1-1,9.1-1v-13.5l1.1-1.2V345l-5.3,4.8l-0.8,5.1H87L86.5,380.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Gatewood') && styles.active
          )}
          data-name="Gatewood"
          onClick={event => {
            onNeighborhoodPress('Gatewood');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M71.1,391.1v2.4l2,3h6.8v-2l5.8-0.7l-1.4,3.4l0.3,7.1l1.9,0.4v8.1h11.4V380h-6.6c0,0-5.7,2.4-7.5,2.9
      s-1.8,0.5-1.8,0.5l-0.2,2.3l-4.2-0.1l-3,5.5C71.1,391.1,71.1,391.1,71.1,391.1z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Fauntleroy') && styles.active
          )}
          data-name="Fauntleroy"
          onClick={event => {
            onNeighborhoodPress('Fauntleroy');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M81.5,396.4v2.4h-8c0,0,0,2.9-0.8,3.4s-7,6.3-6.4,8.2c0.6,1.8,2.8,3.8,4.8,4.9c1.9,1.2,2.8,0.8,3.5,3.2
      c0.6,2.4,2.6,5.6,2,6.7c-0.7,1.1-6.5,5.9-6.8,8.6c-0.2,2.7,0.1,4.1,1.3,4.9c1.2,0.8-0.3-1.1,2.2,3.8c2.6,4.8,9.8,19,11.8,20
      s2.9,2,3.8,2.2s2,0,2.3,0.2s0-7.8,0-7.8s-5.1,0.1-6.1-1.2c-1.1-1.3-1.2-2.6-1.7-5.2c-0.4-2.6-2.1-4.1-2.2-4.4
      c-0.1-0.3-0.8,0-1.6-2.8c-0.8-2.8-0.4-9.5-0.4-9.5l0.8-0.4h8.7L90,435h3.8l0.6-1.9l2.8,0.1v-18.7L84.5,414v-7.2v-1l-1.4,0.1
      L83,395.7h-1.7L81.5,396.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Arbor Heights') && styles.active
          )}
          data-name="Arbor Heights"
          onClick={event => {
            onNeighborhoodPress('Arbor Heights');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M81,435.7h6.6l1,1.2h7.6l0.5-2h7.8l1.9,23.1c0,0-5.2,8.1-6.5,11.7c-1.2,3.6-1.2,3.6-1.2,3.6s-4.7-5.3-5.6-5.6
      c-1-0.2,1.1-0.8,1.1-0.8l-0.5-12c0,0-5.9,0.8-6.8-0.2c-0.9-1-1.3-5.5-1.8-6.8c-0.4-1.2-4.2-1.9-4.2-7S81,435.7,81,435.7z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Delridge') && styles.active
          )}
          data-name="Delridge"
          onClick={event => {
            onNeighborhoodPress('Delridge');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M101.7,364.6l-1.8,1.4l-0.7,67.1h19.8l0.4,4.1l1.2-0.1l0.7-4c0,0,22.7-0.2,25.4-0.2s1,0.9,1.6,3
      s0.4,1.9,2.4,3.8s0.8,0.4,0.8,0.4s1.1,0.1,4.1-1.4s2.5,1.9,2.5,1.9h1.6c0,0,0.1-0.4,0-2.1s-3.1-9.1-3.4-9.8
      c-0.4-0.6-1.6-0.8-3.1-3.4s-2.4-32.6-2.4-32.6l-8.2-1.7c0,0-1.2-0.1-1.7-2.4s-1.9-2.9-3.4-5.6s-1.4-1.5-1.1-5.8s0.4-0.8,0.4-1.9
      s-0.8-3-1.1-4.8c-0.2-1.8-1.2-5.6-2.1-7.2s-3.8-4.4-5.2-5.6s-2.6-3.8-2.6-3.8s0.2-0.5,1.6-1.6s1.5-2.3,1.8-3.9s-1.8-6.2-2.1-7.6
      s-2.1-5.1-2.4-6.2s-1.4-1.1-2.5-1.8s-14.6-1.2-14.6-1.2s-1.6,10.4-2.6,12.9s-4.1,1.2-4.1,1.2L101.7,364.6z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('South Park') && styles.active
          )}
          data-name="South Park"
          onClick={event => {
            onNeighborhoodPress('South Park');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M162.8,427.8l1,5.2l6.7-0.8l2-6.6l11.1-1.1c0,0,0.9-0.2,0-1.8c-0.9-1.6-2.1-4.6-2.2-5.1
      c-0.2-0.5,2.5,0.4-1-0.9c-3.5-1.3-5.8-2.7-6.5-3.8s-0.5-1.4-1.4-1.7s-1.5,1.1-1.1-1.2c0.3-2.2,0.7-2.8,0.7-2.8l-19.3-18.4
      c0,0-0.3-0.2-0.4,2.5c-0.1,2.6,0.1,0,0,5.9c-0.1,5.9,1,19.4,1.8,24.5c0.8,5.1,1.7,5.1,1.7,5.1l3.9,0.6L162.8,427.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Georgetown') && styles.active
          )}
          data-name="Georgetown"
          onClick={event => {
            onNeighborhoodPress('Georgetown');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M142,359.8l5.7,1.5l1.2,2.8l14.5,0.7l3.1,2l6.1,0.6c0,0,11.2,11.3,12.5,13.3s4.7,6.5,6.4,8.6
      c1.8,2.1,4,4.6,4,4.6l3.2,6.1c0,0,3.4,9,4,11.9c0.6,2.9,2.6,11.8,2.6,11.8v2c0,0-0.8-2.9-2.9-3.5c-2.1-0.6-4.6-1.2-4.9-1.8
      c-0.3-0.5-0.4,1.2-1-1.6c-0.6-2.8-2.4-10.1-2.4-10.1s-1-0.4-5.3-2c-4.3-1.6-4.6-1.3-8.6-1.1s-7.1,0.2-7.1,0.2l-19.6-19.1
      c0,0-4.8-7.7-4.9-10.3c-0.1-2.7-1.5-5.2-1.9-6.6C146.2,368.4,142,359.8,142,359.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Beacon Hill') && styles.active
          )}
          data-name="Beacon Hill"
          onClick={event => {
            onNeighborhoodPress('Beacon Hill');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M207,427.6c0,0-2.8,13.6-1.8,16.4s1.8,4.3,3.8,4.2s9.6-1.7,11.2-1.1c1.7,0.6,1.8-0.5,1.8-0.5
      s-1.9-16.9-1.6-19.8c0.3-2.8,0.8-3,1.2-5c0.3-2-0.4-1.7-1.7-5.9s-2-1.3-1.2-6.2s1.8-6.9,0.7-10.3c-1.2-3.4-16.1-47.2-16.1-47.2
      l-6.8-3.4v-28.1h2.5L186,295.1c0,0-2.8,1.3-4.4-1.8c-1.7-3.1-2.2-4.4-2.2-4.4s1-1.3-1.4-1.8c-2.4-0.4-3.6-1.2-4.9-0.7
      c-1.3,0.5-0.9,0.3-1.9,1.7s-1.3-0.2-1.2,2.8s2.5,25.9,2.5,25.9s0.1,1.1,0,4.5c-0.1,3.4-4,26.2-3.4,30.9c0.7,4.8,6.5,16.4,8,17.8
      c1.5,1.4,2.2,1.4,3.9,3.3c1.8,1.9,3.1,2,4.3,4.4c1.2,2.4,13.3,17.6,14.2,19.7c0.8,2.1,6.2,16.5,6.4,18.4
      C206.2,417.8,207,427.6,207,427.6z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Rainier Beach') && styles.active
          )}
          data-name="Rainier Beach"
          onClick={event => {
            onNeighborhoodPress('Rainier Beach');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M221.5,429.8c0,0,2.7,21.5,2.4,22.3s-0.3,0.8-0.3,0.8l3.5,1v-5.6h6.7c0,0,0.5,25.7,1.3,26.9s11,0,11,0
      l-1.3-14.6c0,0,8.4,0.1,9.2-0.9s0.7-0.5,0.7-0.5s1.9,6.6,3.1,6.8s6.6-0.3,6.6-0.3l1.3-0.1l-0.6-5.9c0,0-3.6-0.4-3.6-2.9
      s1.4-7,0.9-7.8s11.6-0.2,11.6-0.2v-1.4c0,0-14.1-1.9-16.8-6.3s-7.1-12.2-8-12.9s-0.9-0.6-0.9-0.6h-0.6c0,0,0.4,0.4-1.5,1.2
      s-7.1,3.3-9.2,2.4s-2.1-0.9-2.1-0.9l-0.9,1.4l-8.7,0.1c0,0,0.4,0.8-1.2-0.4S221.5,429.8,221.5,429.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Dunlap') && styles.active
          )}
          data-name="Dunlap"
          onClick={event => {
            onNeighborhoodPress('Dunlap');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M220.6,408.4c0,0-0.1,2.5,0.6,4.2s2.9,6.7,2.4,7.9s-0.9,1.6-1.1,3.8s-0.6,3.3-0.6,3.3s1.9,1.5,2.8,2.4
      s7.9,0.3,7.9,0.3l0.6-1.8c0,0,4.8,1.1,6.3,0.8s4.7-2.2,5-2.2s1.2-3.9,1.6-7.1s1-3.1-0.8-6.1s-2.8-5.9-2.8-6.2s-22,0-22,0
      L220.6,408.4z"
        />
        <polygon
          className={cx(
            styles.st2,
            shouldBeHighlighted('Brighton') && styles.active
          )}
          data-name="Brighton"
          onClick={event => {
            onNeighborhoodPress('Brighton');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="214.8,380.1 232.9,380.1 233.2,392.8 236.2,392.8 237.1,406.3 220.6,406 221.5,398.9 	"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Seward Park') && styles.active
          )}
          data-name="Seward Park"
          onClick={event => {
            onNeighborhoodPress('Seward Park');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M222.4,333.6v10l6.3,0.4l0.3,13.1h1.8l-0.4,21.3h4.1v12.8h3.9l0.4,15.2h4.1c0,0-1-3.7-0.4-4.8s2.1-3.2,2.1-5.2
      s-0.2-2.9,0-4.6s-0.4-0.6,0.6-2.1s5.6-9.8,4.4-12.5s0.5-2.2,0.5-2.2s5.6-1.2,8.4-2.4s4.5,0.2,4.9-3.9s0.8-5.5,0.4-7.1
      s-1.9-2.2-2.5-4.7s-0.2-3.9-1.2-5.4s-1.2-1.7-2.5-3.1s-0.6-1.6-2.1-1.2s-1.2,0.6-2.1,1.2s-1.4-2.1-1,1.6s-0.1,9.4-0.1,9.4
      s0.4,5.2,0.4,5.5s-1.9,0.9-3,2.1s-1,1.4-1.1,1.8s0.4-0.1-0.1,0.4s0,1-0.8,0.2s-1.3-0.8-1.2-2.7s-1.6-7.2-2.8-9.9s-1.9-5.1-2.6-6.9
      s0.9-1.5-1.5-2.1s-3.5,2.3-2.6-1.3s0.9-5.1-0.9-7.1s-3.8-2.8-4-3.1s-0.2,1.4-0.2,1.4s2.2,3-1.2-0.2s-4-3.6-5.4-4.3
      s-1.6-1.1-2.3-0.6S222.4,333.6,222.4,333.6z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Columbia City') && styles.active
          )}
          data-name="Columbia City"
          onClick={event => {
            onNeighborhoodPress('Columbia City');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M197.7,322.4h2.8c0,0,2.3,7.1,3.4,8.7s1.8,3.1,2.6,4s1.3,0.8,1.7,3.5s1.2,4.4,1.7,5.5s0.2,1.9,3.1,1.7
      s14.5,0,14.5,0v12.8l1.2,0.8v4.6h-19.4l-4.6-13.8l-6.2-2.3l-0.8-0.2V322.4z"
        />
        <polygon
          className={cx(
            styles.st2,
            shouldBeHighlighted('Hillman City') && styles.active
          )}
          data-name="Hillman City"
          onClick={event => {
            onNeighborhoodPress('Hillman City');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="209.9,365.7 214.4,378.6 228.8,378.6 229.1,366.1 	"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Mount Baker') && styles.active
          )}
          data-name="Mount Baker"
          onClick={event => {
            onNeighborhoodPress('Mount Baker');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M199.4,308.7c0.4,1.9,1.7,4.1,2.1,5.8s0,5.8,0.2,7.1s3.4,7.4,4.6,10s1.8,2.1,2.8,3.7s2.6,8.4,2.6,8.4h9.4
      c0,0,0-9,0-9.6s-0.4-0.8-0.8-2.1c-0.5-1.3-0.8-2.8-0.8-2.8v-2.3h0.8c0,0,0.2-1.1-0.3-3.2s-1.9-5.2-3.4-9.2s-3.3-5.5-4.3-7.3
      s-0.1-1.1-0.1-1.6s1.5-3.2,2-4.4s0-6.3,0-6.3l-14.5,0.3L199.4,308.7z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Madison Park') && styles.active
          )}
          data-name="Madison Park"
          onClick={event => {
            onNeighborhoodPress('Madison Park');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M219.2,231.3c0,0-2.1-3.2-0.8-4.9c1.3-1.8,4.9-4.2,5.4-6.5s2.4-6.9,2.2-10c-0.2-3.1,0.8-8.4,0.7-9.5
      s-0.8-1.2-1.2-2.6s1.8-0.4-0.8-3.1c-2.7-2.7-4.2-3.2-4.2-3.2l-3.2-0.5c0,0-2.3-5.5-5.8-6.1c-3.4-0.6-6.7-1.1-7.1,0
      c-0.4,1.1-0.3,5.7-0.3,5.7s-0.2,1.9-0.8,3.6c-0.6,1.7-4.5,11-4.5,11.8c0,0.8,0.8,3,0.9,4.6c0.1,1.6-0.2,3.6,0.7,5.5
      c0.9,1.9,4.3,3.5,4.8,5.1s1.6,3.9,1.6,3.9s1.2,1.1,2.8,2.1c1.7,1.1,5,2.2,5,2.2s1.5,0.6,2.2,1.8
      C217.5,232.5,219.2,231.3,219.2,231.3z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Laurelhurst') && styles.active
          )}
          data-name="Laurelhurst"
          onClick={event => {
            onNeighborhoodPress('Laurelhurst');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M226.8,177.5c0,0,0.9,5,0,5.7c-0.9,0.7,0.2,1.9-2,1.1c-2.2-0.8-3-7.1-5.6-9.9s-3.2-3.8-5.2-4
      c-2-0.2-3.1,0-3.1,0s-0.6-0.9,0.6-3.2c1.2-2.3,1.4-2.5,0.3-3.4c-1.1-0.9-2.3-1.4-2.3-1.4l-0.4-4c0,0,4.6-1.4,5.1-1.8
      c0.5-0.3,8-11.8,8-11.8h6.2l4.8,6.2l5.1,1.6c0,0-1.2,3.4-1.3,5.6c-0.2,2.2,0.2,3.7-0.9,5.2c-1.1,1.5-5.4,5.2-6.2,6.3
      c-0.8,1.2-3.2,2.5-3.2,5.2C226.8,177.5,226.8,177.5,226.8,177.5z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Windermere') && styles.active
          )}
          data-name="Windermere"
          onClick={event => {
            onNeighborhoodPress('Windermere');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M222.1,129.9v13h6.9l5.7,7.1l4.8,1.3c0,0,13.2-10.2,14.6-12.3c1.4-2.1,2.4-3.8,2.4-3.8l-2.7-2.1l-1.5,1.6h-4.1
      l-0.2-4.8c0,0-18-0.1-18.5,0.6s-1.8,1.2-1.8,1.2s-0.2,1.1-1.3-0.2c-1.1-1.3-1.1-1.3-1.1-1.3L222.1,129.9z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('University District') && styles.active
          )}
          data-name="University District"
          onClick={event => {
            onNeighborhoodPress('University District');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M207.2,158.4v5.2l3.1,1c0,0,0.1-0.2,0,0.7c-0.1,0.9-1,0.2-1.1,2.8c-0.1,2.7,0,3.2,0,3.2s-3.3,0.8-4.4,1.8
      c-1.1,1-3.4,2.2-4.2,5.6c-0.8,3.3-3.1,4.5-3.1,4.5s-4.4,1.9-5.6,1.7c-1.2-0.2-11.4-2.7-11.4-2.7s-3.5-2.1-4.1-3.3
      c-0.6-1.2-5.5-6.5-6.7-6.5s-1.2,0-1.2,0s-0.8-26.9,0.3-32.5c1.1-5.6,1.1-5.6,1.1-5.6s3.4,4,5.5,4.2s3.5,0.6,3.5,0.6l2.2-2.2
      l8.6,3.8l0.3,4.5l4-0.4v13.8L207.2,158.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Wallingford') && styles.active
          )}
          data-name="Wallingford"
          onClick={event => {
            onNeighborhoodPress('Wallingford');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M137,151.3v4.4h6.2l-0.6,26.8c0,0,3.7,0,4.6,2c0.9,2,1.4,3.5,1.4,3.5l-0.5,1.2c0,0,3.7,1.9,5.3,0.3
      c1.7-1.6,5.2-8,7.8-12.2s4.2-5,5.1-5.3c0.8-0.3,0.8-0.3,0.8-0.3v-34.3c0,0-13.3-0.5-14-0.9c-0.7-0.4-0.7-0.4-0.7-0.4
      s-0.6,0.9-1.2,2.1c-0.7,1.2-0.9,1.2-1.5,1.2s-0.6,0-0.6,0s-1.6,0.6-2.2,1.2c-0.7,0.6-0.8,1.8-0.8,1.8v7.5l-0.2,1.1L137,151.3z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Phinney Ridge') && styles.active
          )}
          data-name="Phinney Ridge"
          onClick={event => {
            onNeighborhoodPress('Phinney Ridge');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M144.2,148.8v-7.7c0,0-3.2-0.4-3.7-1.8c-0.5-1.3-2-4.8-3.5-6.1s-1.8-2-1.8-2s0.8-0.4,1.1-2.9
      c0.3-2.5,1.8-12.8,1.8-12.8h-24.5v12.2l6.4,0.1v19.1c0,0,2.8,7.2,4.6,7.8c1.8,0.6,2.2,0.8,2.2,0.8v-6.2L144.2,148.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Fremont') && styles.active
          )}
          data-name="Fremont"
          onClick={event => {
            onNeighborhoodPress('Fremont');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M128.3,151.3v5.8c0,0,1.8,0.4-1.7-0.4c-3.5-0.8-5.6-4.2-6.2-5.3c-0.7-1.1-0.7-1.1-0.7-1.1v7.8h-6.2
      c0,0-0.6,4.1-0.4,6.2c0.2,2.1,0.4,4.3,0.4,4.3l32.2,19.8l0.8-1.2c0,0,0-1.7-2.3-2.2c-2.3-0.5-3.8-1.8-3.7-2s-0.2-2.1,0-3.5
      s0.6-21.9,0.6-21.9l-6.3,0.1v-6.8L128.3,151.3z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Ballard') && styles.active
          )}
          data-name="Ballard"
          onClick={event => {
            onNeighborhoodPress('Ballard');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M111.6,156.3h0.2h6.6v-26.4h-6.8v-28H72c0,0-2.3-4.8-2.8-7.1s-2.6-2.6-3.2-3.1c-0.7-0.5-1.8,1.6-0.8-1.8
      c1.1-3.3,0.6-3.2,0.6-3.2l-2.8,2.2v2.2l-0.8,0.9l-0.9-0.2c0,0-0.3,0.6-0.3,3.1s1.2,5,1.2,5s1.8,2.1,1.8,2.4
      c0.1,0.3,0.6,0.2,0.6,2.5s0.2,4.2-0.6,8.8c-0.8,4.6-2.1,8.7-4.2,11c-2.1,2.3-2.1,2.3-2.1,2.3s-1.2,0.4-1.5-1.3
      c-0.3-1.8-0.8-1.4-0.8-1.4s-0.8,1.8,0,3.3c0.8,1.6,0.5,0.6,2.2,3.5c1.7,2.9,3.2,2.5,4.1,5.9c0.9,3.4,0.8,4.5,2.3,6.3
      c1.5,1.8,0.4,1.8,2.7,2.8s3.1,0.8,6.4,1.6c3.3,0.8,4.6,1,4.6,1s0.5-2,1.5-2.2c1-0.2-0.2-0.7,2.1,0.8c2.3,1.4,4.7,1.1,6.2,2.9
      s1,2.7,2.9,3.8c1.9,1.1,0.7,1.6,3.4,2.3s3.8,1,6.2,1.9s7.5,3.4,8,3.9c0.5,0.5,2.6,2.3,3,3.2c0.4,0.9,0.5,1.1,0.5,1.1L111.6,156.3z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('North Beach') && styles.active
          )}
          data-name="North Beach"
          onClick={event => {
            onNeighborhoodPress('North Beach');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M67.2,89.9c0.5-2.4,0.3-2.5,0.7-3.5c0.3-1,18.5-12.2,20.7-15.5s4-4.1,4-4.1s14.2,1.2,17.2,0s3.7-1.8,3.7-1.8
      s1.3,1.6,2.2,2.8c0.9,1.1,2.5,3.6,2.5,3.6h-18.1v7l-2.8-0.1l0.1,13.6h-7.4l-0.1,8.1H72.5c0,0-0.6-7.6-2.4-8.5S67.2,89.9,67.2,89.9z
      "
        />
        <polygon
          className={cx(
            styles.st2,
            shouldBeHighlighted('Crown Hill') && styles.active
          )}
          data-name="Crown Hill"
          onClick={event => {
            onNeighborhoodPress('Crown Hill');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="92.8,94.1 92.8,100 111.2,100 111.2,73.6 102,73.6 102,80.6 99.4,80.5 99.4,93.9 	"
        />
        <polygon
          className={cx(
            styles.st2,
            shouldBeHighlighted('Greenwood') && styles.active
          )}
          data-name="Greenwood"
          onClick={event => {
            onNeighborhoodPress('Greenwood');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="113.6,113.9 139,113.9 138,73.6 113.6,73.6 	"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Broadview') && styles.active
          )}
          data-name="Broadview"
          onClick={event => {
            onNeighborhoodPress('Broadview');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M102,20.4h22.9v51.5h-4.5l-3.6-6.9c-1.5-1.8-2.6-2-2.6-2l-1.6-3.5c0,0-0.2-0.4-1.2,1.9s-0.5,3.6-0.5,3.6
      s-18.5,2.2-18-1.4c0.6-3.6-2-3.6,0.8-5.8s6.4-5.6,6.4-5.6s-0.5-2.8-0.5-6.1s-0.6-2.9,0-6.2S102,20.4,102,20.4z"
        />
        <rect
          className={cx(
            styles.st2,
            shouldBeHighlighted('Bitter Lake') && styles.active
          )}
          data-name="Bitter Lake"
          onClick={event => {
            onNeighborhoodPress('Bitter Lake');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          x="126.3"
          y="20.4"
          width="12.7"
          height="51.5"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Northgate') && styles.active
          )}
          data-name="Northgate"
          onClick={event => {
            onNeighborhoodPress('Northgate');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M140.4,20.4h38.8l1.1,62.1h10.1c0,0-2.2,1.8-2.8,5.5s1,9.6-0.2,10.6s-3.5,1.4-3.5,1.4h-42.8L140.4,20.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Olympic Hills') && styles.active
          )}
          data-name="Olympic Hills"
          onClick={event => {
            onNeighborhoodPress('Olympic Hills');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M180.6,20.4l0.9,24h20c0,0,4.4-13.6,4-17s0-6.1,0-6.1L180.6,20.4z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Cedar Park') && styles.active
          )}
          data-name="Cedar Park"
          onClick={event => {
            onNeighborhoodPress('Cedar Park');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M207.6,21h2.7c0,0,1.7,4.9,3.6,6.2s4.8,3.5,5.9,6.1s4.1,18.1,4.1,18.1s-3.3-5.1-5.1-4.6s-3,1.5-3,1.5v2.4
      l-15,0.8c0,0,5.8-14.5,6.4-19.1S207.6,21,207.6,21z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Victory Heights') && styles.active
          )}
          data-name="Victory Heights"
          onClick={event => {
            onNeighborhoodPress('Victory Heights');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M181.8,80.9h9.8c0,0,0.6,1.1,0.9-6.2c0.3-7.2,0-5.7,1-8.6c1-2.9,2.1-6.5,3.5-10.4c1.4-3.9,3.8-9.6,3.8-9.6
      l-19-0.5V80.9z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Meadowbrook') && styles.active
          )}
          data-name="Meadowbrook"
          onClick={event => {
            onNeighborhoodPress('Meadowbrook');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M200,52.8c0,0,4.8,1.1,5.1,1.1c0.3,0,0.3,1.9,1.2,3.6C207.2,59.2,207,86,207,86l-15.8-0.2c0,0-0.2-1.5,1.8-4.8
      c2-3.3,2.5-3.2,2.2-4.7s-0.8-2.8-0.5-5.2s1.6-9.3,2.9-11.6C199,57.2,200,52.8,200,52.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Matthews Beach') && styles.active
          )}
          data-name="Matthews Beach"
          onClick={event => {
            onNeighborhoodPress('Matthews Beach');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M207,53.8l10.1-0.9V50h3.1l1.3,2.8l2.6,1.6l7.8,30.6c-0.8,2.6-1.1,2.1-1.2,3.4s4.8,8.9,4.8,8.9s-4.1-2.4-6-1.8
      s-1.1-0.2-2.2,0.6s-1.8,1.1-2.9,1.2s-1.6-0.6-1.9-1.6s-0.3-0.2-0.3-2.9s0-7.2,0-7.2l-13,0.4c0,0-0.5-28.2-1.1-29.6
      S207,53.8,207,53.8z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Wedgwood') && styles.active
          )}
          data-name="Wedgwood"
          onClick={event => {
            onNeighborhoodPress('Wedgwood');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M189.6,88.6c0,0,0.9,7,0,8.8c-0.9,1.7-1.4,3.4-1.6,3.4s6.6,0,6.6,0s1.1,12.2,1.6,13.1s24.2,0,24.2,0V88.2
      L189.6,88.6z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Sand Point') && styles.active
          )}
          data-name="Sand Point"
          onClick={event => {
            onNeighborhoodPress('Sand Point');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M238.9,103.5c0.4,1.2,2.9,7.8,3.2,9.8s0.2,5.7,0.3,8s0,7.1,0,7.1h6.9l0.4,4.5h2.2l1.4-1.8l4.2,2.4
      c0,0,3.4-9.9,5.6-12.6s2.9-1.3,2.1-4.5s1.1-2.3-2.9-6.1s-5.6-5.8-9.6-6.1s-10.4-3.1-11.4-3.1s-2.5,0-2.5,0V103.5z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('View Ridge') && styles.active
          )}
          data-name="View Ridge"
          onClick={event => {
            onNeighborhoodPress('View Ridge');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M222.1,98.8v17.3h-6.3v12.4l10.9,0.3c0,0-0.1,1.5,0.6,1s1.8-1,1.8-1l11.9-0.4v-14.1c0,0-1.2,0.5-1.8-2.4
      c-0.7-2.9-1.2-7.9-2.4-9.6s-1.2-1.4-2.6-3.1s-2.3-2.9-4.1-2.3s-4.2,1.6-5.6,1.9S222.1,98.8,222.1,98.8z"
        />
        <polyline
          className={cx(
            styles.st2,
            shouldBeHighlighted('Bryant') && styles.active
          )}
          data-name="Bryant"
          onClick={event => {
            onNeighborhoodPress('Bryant');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          points="207.3,156.3 209.2,154.6 208.9,116.3 214.2,116.3 214.2,130 220.6,130 220.6,144.1 212.5,155.6 
      208.2,156.3 	"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Ravenna') && styles.active
          )}
          data-name="Ravenna"
          onClick={event => {
            onNeighborhoodPress('Ravenna');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M181.9,116.3V135l9.6,4.9v3.6l4.2-0.8l-0.2,13.5h9.4l2.1-2.5l0.3-37.2l-13.6-0.8v-7.6c0,0-1.2-1.3-0.9-3.4
      s0.2-2.7,0.2-2.7h-5.2l0.2,14.6L181.9,116.3z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Roosevelt') && styles.active
          )}
          data-name="Roosevelt"
          onClick={event => {
            onNeighborhoodPress('Roosevelt');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M186.2,114.2v-12.1h-26.6c0,0,4.7,6.6,7.4,10.7s2.8,2.5,2.7,4.6c-0.1,2.2,0.2,3.9,0.6,6.7
      c0.3,2.8-0.4,7.7-0.4,7.7s2.9,1.8,3,2.5c0.1,0.7,5.5,3.1,5.5,3.1l1.6-1.3l-0.3-16.3l0.2-4.2l-0.2-1.3H186.2z"
        />
        <path
          className={cx(
            styles.st2,
            shouldBeHighlighted('Greenlake') && styles.active
          )}
          data-name="Greenlake"
          onClick={event => {
            onNeighborhoodPress('Greenlake');
            history.push(
              `/haus/discover${prefix}/${event.target.dataset.name}`
            );
          }}
          d="M139,122.1l1,0.2c-0.6,0.9,0.1,1.4,0.1,2.8s-0.6,1.2-1.8,2.8s-0.1,0.5,0.7,1.7s1.6,1.5,1.9,3s0.5,2.9,2.6,2.8
      c2.1-0.1,2.8-1.4,5.6-4.4s1.9-1.2,3-2.4c1.1-1.2,1.1-2.1,1.8-3.8s0.3-1,1.2-2s3.2-1.6,3.6-2.6s-0.6-0.9-2.7-0.5
      c-2.1,0.4-2.6,0.2-4.2-0.8c-1.7-1-0.9-2-1.7-3.4s-0.9-1.4-2.9-2c-1.9-0.7-0.5,0.5-0.1,2s0,1,0,2.7s-0.4,0.5-1.4,1.6s0,0,0,0.7
      s0,1.1-0.3,3.1s-0.6,0.6-1.5,0c0,0-1.8-1.8-2.2-2.5s-2.5,0.3-2.5,0.3s2.2-5.9,1.9-9.4s-0.5-9.9-0.5-9.9h17.7c0,0,2.9,4.8,4.7,7.3
      s2.9,4.2,3.9,5.5s1.7,0.6,1.7,2.7s0.2,9.5,0,11.1c-0.2,1.6,0,5.5-0.5,6.2s-13.2,0.1-13.2,0.1s-0.2-1.3-1.5-1.1
      c-1.2,0.2-2,2.3-2,2.3s0.2,0.6-1.3,1.3c-1.5,0.8-1.4,0.5-2.5,1.2s-0.7,1.4-2.4,0.9s-3-0.8-3.5-2.1c-0.5-1.3-0.6-1.9-1.2-2.7
      s-1.7-2.1-2.3-3.2c-0.6-1.1,0.6-4,0.6-4.6s-0.1-0.8,0.1-1.8S139,122.1,139,122.1z"
        />
      </g>
    </svg>
  );
};

export default withRouter(Map);
