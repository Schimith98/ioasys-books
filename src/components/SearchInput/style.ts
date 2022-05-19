import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  width: 80%;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 2px;
`;

export const Input = styled.TextInput`
  font-weight: 500;
  font-size: 12px;
  color: #333333;
  padding: 0;
  margin-left: 11px;
  width: 75%;
`;

export const IconButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
`;
