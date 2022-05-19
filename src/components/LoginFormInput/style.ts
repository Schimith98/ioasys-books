import styled from 'styled-components/native';

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.32);
  padding: 8px 16px 8px 13px;
  margin: 8px 0;
  border-radius: 4px;
  justify-content: space-between;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ContainerButton = styled.View`
  width: 40%;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.5;
`;

export const Input = styled.TextInput`
  font-weight: 400;
  font-size: 16px;
  padding: 0;
`;
