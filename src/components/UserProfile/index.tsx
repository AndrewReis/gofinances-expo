// dependencies & libs
import React from 'react';

// styles
import { Container, Photo, Info, Text, Username } from './styles';

export function UserProfile(){

  return (
    <Container>
      <Photo source={{uri: 'https://avatars.githubusercontent.com/u/60078687?v=4' }} />
      <Info>
        <Text>Olá,</Text>
        <Username>Andrew Reis</Username>
      </Info>
    </Container>
  )
}

