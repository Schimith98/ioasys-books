import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${props => props.bgColor};
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 44px;
  padding: 6px 16px;
  align-items: center;
  margin: 4px;
`;
export const CategoryName = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.color};
`;
