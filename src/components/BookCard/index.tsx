import React from 'react';
import {
  Container,
  ImageContainer,
  InfoContainer,
  Title,
  Author,
  Description,
  DescriptionContainer,
  Image,
} from './style';
import {StyleSheet} from 'react-native';
import {IBook} from '../DescriptionModal';

interface IBookCard {
  imageUrl: string;
  title: string;
  authors: string[];
  pageCount: number;
  publisher: string;
  published: number;
  book: IBook;
  onPress: () => void;
}

const BookCard = (props: IBookCard) => {
  return (
    <Container onPress={props.onPress}>
      <ImageContainer>
        <Image source={{uri: props.book.imageUrl}} />
      </ImageContainer>
      <InfoContainer>
        <Title>{props.book.title}</Title>
        {props.book.authors.map((author, i) => (
          <Author key={author + i}>{author}</Author>
        ))}
        <DescriptionContainer>
          <Description>{props.book.pageCount} páginas</Description>
          <Description>Editora {props.book.publisher}</Description>
          <Description>
            Publicado em {props.book.published}
            {/* <br /> */}
          </Description>
        </DescriptionContainer>
      </InfoContainer>
    </Container>
  );
};

export default BookCard;
