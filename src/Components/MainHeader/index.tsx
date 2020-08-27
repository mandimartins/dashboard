import React, { useMemo } from 'react';
import { Container, Profile, Welcome, UserName } from './styles';

import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <h1>Toggle</h1>

      <Profile>
        <Welcome>Olá,{emoji}</Welcome>
        <UserName>Amanda Martins</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
