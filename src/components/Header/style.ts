import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Text`
  font-weight: 900;
  font-size: 36px;
  color: ${props => props.color};
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 300;
  margin-left: 16.6px;
  color: ${props => props.color};
`;
