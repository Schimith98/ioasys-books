import React, {useEffect, useState, useContext} from 'react';
import {Container, FormContainer} from './style';
import {ImageBackground, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import LoginFormInput from '../../components/LoginFormInput';
import {useAuth} from '../../context/auth';

const bgImage = require('../../assets/bgLogin.png');

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signed, signIn, user} = useAuth();

  async function handleSign() {
    signIn({email, password});
  }

  return (
    <Container>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Header color={'#FFFFFF'} />
        <FormContainer>
          <LoginFormInput
            label="Email"
            type="email"
            placeholder="example@email.com"
            onChange={setEmail}
            showSubmitButton={false}
          />
          <LoginFormInput
            label="Senha"
            type="password"
            placeholder="***********"
            onChange={setPassword}
            showSubmitButton={true}
            submit={handleSign}
          />
        </FormContainer>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default Login;
