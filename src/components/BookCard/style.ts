import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
  height: 160px;

  elevation: 5;
`;

export const ImageContainer = styled.View`
  width: 40%;
  /* height: 100%; */
  justify-content: center;
`;

export const Image = styled.Image`
  width: 81px;
  height: 122px;
`;

export const InfoContainer = styled.View`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #333333;
`;
export const Author = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #ab2680;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;
