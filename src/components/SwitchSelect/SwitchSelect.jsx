import React, { useState } from 'react';
import styled from 'styled-components';

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
      <Switch columns={components.length}></Switch>
      {view}
    </Container>
  );
};

export default SwitchSelect;
