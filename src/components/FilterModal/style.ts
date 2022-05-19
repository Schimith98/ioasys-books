import styled from 'styled-components/native';

export const ModalView = styled.View`
  background-color: #fff;
  padding: 16px;
  margin: 0 16px;
  border-radius: 4px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  justify-content: center;
  align-self: flex-end;
  border-radius: 32px;
`;

export const Title = styled.Text`
  color: #333333;
  font-weight: 500;
  font-size: 12px;
`;

export const Categories = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 14px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background: #ffffff;
  border: 1px solid #b22e6f;
  border-radius: 44px;
  align-items: center;
  width: 91px;
  align-self: center;
  margin-top: 54px;
`;
export const ButtonText = styled.Text`
  color: #b22e6f;
  font-weight: 500;
  font-size: 16px;
`;
