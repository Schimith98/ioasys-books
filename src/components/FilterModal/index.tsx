import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  ModalView,
  CloseButton,
  Categories,
  Title,
  ButtonContainer,
  ButtonText,
} from './style';
import Category, {ICategory} from '../Category';
import Modal from 'react-native-modal';
import {IBookCategory} from '../../schemas/BookCategories';

const closeIcon = require('../../assets/close.png');

interface IFilterModal {
  visible: boolean;
  setVisible: () => void;
  allCategories: IBookCategory[];
  selectedCategories: string[];
  handleCategoryArray: (name: string) => void;
  filterByCategory: (isTheFirstPage: boolean) => void;
}

const FilterModal = (props: IFilterModal) => {
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={props.visible}
      style={{margin: 0}}
      useNativeDriver={true}>
      <ModalView>
        <CloseButton onPress={() => props.setVisible()}>
          <Image source={closeIcon} style={styles.filterIcon} />
        </CloseButton>
        <Title>Selecione a categoria</Title>
        <Categories>
          {props.allCategories.map((category, i) => (
            <Category
              key={i}
              nameTranslated={category.nameTranslated}
              name={category.name}
              selectedArray={props.selectedCategories}
              handleCategoryArray={props.handleCategoryArray}
            />
          ))}
        </Categories>
        <ButtonContainer>
          <ButtonText
            onPress={() => {
              props.filterByCategory(true);
              props.setVisible();
            }}>
            Filtrar
          </ButtonText>
        </ButtonContainer>
      </ModalView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  filterIcon: {
    width: 20,
    height: 16.34,
    alignSelf: 'center',
  },
  closeIcon: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
});

export default FilterModal;
