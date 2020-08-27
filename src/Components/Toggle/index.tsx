import React from 'react';

import { Container, ToggleLable, ToggleSelector } from './styles';

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLable>Light</ToggleLable>
      <ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => {}}
      />
      <ToggleLable>Dark</ToggleLable>
    </Container>
  );
};

export default Toggle;
