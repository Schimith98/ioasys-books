import styled from 'styled-components/native';

export const ModalView = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 99;
  left: 16px;
  top: 44px;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  background-color: #fff;
  border-radius: 32px;
  justify-content: center;
`;

export const ScrollContainer = styled.ScrollView``;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  margin: 0 auto;
  padding-bottom: 44px;
`;

export const BookCoverContainer = styled.View`
  margin-top: 88px;
  width: 240px;
  height: 351px;
  /* filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3)); */
`;
export const BookCover = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TitleText = styled.Text`
  margin: 24px auto 0 auto;
  font-weight: 500;
  font-size: 28px;
  color: #333333;
`;

export const AuthorsContainer = styled.Text`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const AuthorsText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #ab2680;
`;

export const InfoTitle = styled.Text`
  margin-top: 32px;
  font-weight: 500;
  font-size: 12px;
  color: #333333;
  align-self: flex-start;
  margin-bottom: 8px;
  text-transform: uppercase;
`;
export const InfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
`;

export const InfoKeyText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #333333;
`;

export const InfoValueText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #999999;
`;

export const QuotationMarkContainer = styled.View`
  width: 17.58px;
  height: 14.14px;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  margin-top: 8px;
`;

export const QuotationMark = styled.Image`
  position: absolute;
  width: 17.58px;
  height: 14.14px;
`;

export const DescriptionText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #999999;
  margin-top: 5px;
`;
