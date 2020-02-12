import React, { useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

import Text from 'components/Text';
import styles from 'components/SwitchSelect/switch-select.module.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Switch = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: ${props => '1fr '.repeat(props.columns)};
`;

/*
 * @param components: [{ name: String, component: React.Node }]
 */

const SwitchSelect = ({ components }) => {
  const [defaultView] = components;
  const [view, setView] = useState(defaultView.component);

  return (
    <Container>
      <Switch columns={components.length}>
        {components.map(({ name, component }, index) => (
          <div
            className={cx(
              styles.switchItem,
              view === component && styles.active
            )}
            id={name}
            key={index}
            onClick={() => setView(component)}
          >
            <Text type="large" className={styles.switchItemText}>
              {name}
            </Text>
          </div>
        ))}
      </Switch>
      {view}
    </Container>
  );
};

export default SwitchSelect;
