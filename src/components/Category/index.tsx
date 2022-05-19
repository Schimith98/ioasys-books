import React, {useEffect, useState} from 'react';
import {Container, CategoryName} from './style';

export interface ICategory {
  name: string;
  nameTranslated: string;
  selectedArray: string[];
  handleCategoryArray: (name: string) => void;
}

const Category = (props: ICategory) => {
  const [isSelected, setIsSelected] = useState(false);

  const toogleSelection = () => {
    props.handleCategoryArray(props.name);
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    if (props.selectedArray.includes(props.name)) {
      setIsSelected(true);
    }
  }, []);

  return (
    <Container
      onPress={() => toogleSelection()}
      bgColor={isSelected ? '#333333' : '#fff'}>
      <CategoryName color={isSelected ? '#fff' : '#333333'}>
        {props.nameTranslated}
      </CategoryName>
    </Container>
  );
};

export default Category;
