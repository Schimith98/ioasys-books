import React, {Dispatch, SetStateAction} from 'react';
import {Input, Container, IconButton} from './style';
import {Image, StyleSheet} from 'react-native';

const image = require('../../assets/search.png');

interface ISearchInput {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  search: (isTheFirstPage: boolean) => void;
}

const SearchInput = (props: ISearchInput) => {
  return (
    <Container>
      <Input
        placeholder={'Procure um livro'}
        placeholderTextColor="rgba(153, 153, 153, 0.7);"
        onChangeText={props.onChangeText}
        value={props.value}></Input>
      <IconButton onPress={() => props.search(true)}>
        <Image source={image} style={styles.searchIcon} />
      </IconButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    width: 17.08,
    height: 17.08,
    alignSelf: 'center',
  },
});

export default SearchInput;
