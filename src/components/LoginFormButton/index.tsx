import React from 'react';
import {Container, Text} from './style';

const LoginFormButton = ({onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>Entrar</Text>
    </Container>
  );
};

export default LoginFormButton;
