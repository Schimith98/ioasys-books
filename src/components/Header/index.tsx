import React from 'react';
import {Container, Row, Logo, Title} from './style';
import {View, Image, StyleSheet} from 'react-native';

const image = require('../../assets/logout.png');

interface IHeader {
  color: string;
}

const Header = (props: IHeader) => {
  return (
    <Container>
      <Row>
        <Logo color={props.color}>ioasys</Logo>
        <Title color={props.color}>Books</Title>
      </Row>
    </Container>
  );
};

export default Header;
