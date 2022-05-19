import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import {
  ModalView,
  BackButton,
  TitleText,
  AuthorsText,
  AuthorsContainer,
  InfoContainer,
  InfoTitle,
  InfoKeyText,
  InfoValueText,
  Container,
  ScrollContainer,
  DescriptionText,
  BookCoverContainer,
  BookCover,
  QuotationMark,
  QuotationMarkContainer,
  DescriptionContainer,
} from './style';

const arrowIcon = require('../../assets/arrow.png');
const quotationMark = require('../../assets/quotationMark.png');

export interface IBook {
  authors: string[];
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

interface IDescriptionModal {
  visible: boolean;
  setVisible: () => void;
  book: IBook;
}

const DescriptionModal = (props: IDescriptionModal) => {
  if (props.book) {
    return (
      <Modal
        animationIn={'slideInLeft'}
        isVisible={props.visible}
        animationOut={'slideOutLeft'}
        style={{margin: 0}}>
        <ModalView>
          <BackButton onPress={() => props.setVisible()}>
            <Image source={arrowIcon} style={styles.backButton} />
          </BackButton>
          <ScrollContainer>
            <Container>
              <BookCoverContainer>
                <BookCover source={{uri: props.book.imageUrl}} />
              </BookCoverContainer>
              <TitleText>{props.book.title}</TitleText>
              <AuthorsContainer>
                {props.book.authors &&
                  props.book.authors.map((author, i) => (
                    <AuthorsText key={i}>
                      {author}
                      {props.book.authors.length - 1 > i && ', '}
                    </AuthorsText>
                  ))}
              </AuthorsContainer>
              <InfoTitle>INFORMAÇÕES</InfoTitle>
              <InfoContainer>
                <InfoKeyText>Páginas</InfoKeyText>
                <InfoValueText>{props.book.pageCount}</InfoValueText>
              </InfoContainer>
              <InfoContainer>
                <InfoKeyText>Editora</InfoKeyText>
                <InfoValueText>{props.book.publisher}</InfoValueText>
              </InfoContainer>
              <InfoContainer>
                <InfoKeyText>Publicação</InfoKeyText>
                <InfoValueText>{props.book.published}</InfoValueText>
              </InfoContainer>
              <InfoContainer>
                <InfoKeyText>Título Original</InfoKeyText>
                <InfoValueText>{props.book.title}</InfoValueText>
              </InfoContainer>
              <InfoContainer>
                <InfoKeyText>ISBN-10</InfoKeyText>
                <InfoValueText>{props.book.isbn10}</InfoValueText>
              </InfoContainer>
              <InfoContainer>
                <InfoKeyText>ISBN-13</InfoKeyText>
                <InfoValueText>{props.book.isbn13}</InfoValueText>
              </InfoContainer>
              <InfoContainer>
                <InfoKeyText>Categoria</InfoKeyText>
                <InfoValueText>{props.book.category}</InfoValueText>
              </InfoContainer>
              <InfoTitle>Resenha da Editora</InfoTitle>

              <DescriptionContainer>
                <QuotationMark source={quotationMark} />
                <DescriptionText>
                  {'        '}
                  {props.book.description}
                </DescriptionText>
              </DescriptionContainer>
            </Container>
          </ScrollContainer>
        </ModalView>
      </Modal>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  backButton: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
});

export default DescriptionModal;
