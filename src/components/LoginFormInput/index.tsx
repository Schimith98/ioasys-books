import React from 'react';
import LoginFormButton from './../LoginFormButton/index';
import {Column, Row, Label, Input, ContainerButton} from './style';

interface ILoginFormInput {
  label: string;
  type: string;
  placeholder: string;
  onChange: () => void;
  showSubmitButton: boolean;
  submit: () => void;
}

const LoginFormInput = ({
  label,
  type,
  placeholder,
  onChange,
  showSubmitButton,
  submit,
}: ILoginFormInput) => {
  return (
    <Row>
      <Column>
        <Label>{label}</Label>
        <Input
          secureTextEntry={type === 'password' ? true : false}
          placeholder={placeholder}
          onChangeText={onChange}
        />
      </Column>

      <ContainerButton>
        {showSubmitButton && <LoginFormButton onPress={submit} />}
      </ContainerButton>
    </Row>
  );
};

export default LoginFormInput;
