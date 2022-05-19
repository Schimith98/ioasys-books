import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 40px 16px 0;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SearchAndFilterContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 34px;
  justify-content: space-between;
`;

export const BookListContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-top: 50px;
`;
