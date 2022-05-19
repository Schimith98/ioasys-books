import React, {useState, useEffect, useRef} from 'react';
import {
  Container,
  HeaderContainer,
  SearchAndFilterContainer,
  BookListContainer,
  FooterText,
} from './style';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import Filter from '../../components/Filter';
import FilterModal from '../../components/FilterModal';

import {useAuth} from '../../context/auth';
import LogoutButton from '../../components/LogoutButton';

import {bookCategories} from '../../schemas/BookCategories';
import BookCard from '../../components/BookCard';
import {booksService} from '../../services/books';
import {FlatList, StyleSheet, RefreshControl} from 'react-native';

import DescriptionModal, {IBook} from '../../components/DescriptionModal';

const PAGE = 1;
const AMOUNT = 10;
const TOTAL_ITEMS = 500;
const TOTAL_PAGES = TOTAL_ITEMS / AMOUNT;

let actualPage = PAGE;
let amount = AMOUNT;
let totalItems = TOTAL_ITEMS;
let totalPages = TOTAL_PAGES;

const Home: React.FC = () => {
  const {user, signOut} = useAuth();

  const flatListRef = useRef();

  const [filterModalVisibility, setFilterModalVisibility] = useState(false);
  const toogleFilterModalVisibility = () =>
    setFilterModalVisibility(!filterModalVisibility);

  const [descriptionModalVisibility, setDescriptionModalVisibility] =
    useState(false);
  const toogleDescriptionModalVisibility = () =>
    setDescriptionModalVisibility(!descriptionModalVisibility);

  const [searchText, setSearchText] = useState('');
  const [selectedBook, setSelectedBook] = useState<IBook>(null);
  const [categoryArray, setCategoryArray] = useState([]);

  const [booksDisplayed, setBooksDisplayed] = useState([]);
  const [loading, setLoading] = useState(false);

  const [hasMoreToLoadTop, setHasMoreToLoadTop] = useState(false);
  const [hasMoreToLoadBottom, setHasMoreToLoadBottom] = useState(true);

  useEffect(() => {
    firstRequisiton();
  }, []);

  const getData = async (page, amount) => {
    try {
      const params = `?page=${page}&amount=${amount}&title=${searchText}`;
      let categoryParams = '';
      for (let index = 0; index < categoryArray.length; index++) {
        const category = categoryArray[index];
        categoryParams = `${categoryParams}&category=${category}`;
      }
      const response = await booksService.getBooks(params + categoryParams);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        alert('Sua sessão expirou!');
        handleSignOut();
      }
    }
  };

  const passPage = async () => {
    if (actualPage < totalPages) {
      setLoading(true);
      const response = await getData(actualPage + 1, amount);
      const data = response.data.data;
      actualPage = response.data.page;
      totalPages = response.data.totalPages;
      totalItems = response.data.totalItems;
      setBooksDisplayed(data);
      setLoading(false);
      setHasMoreToLoadTop(true);
      if (booksDisplayed.length > 0) {
        flatListRef.current.scrollToOffset({animated: true, offset: 0});
      }
    } else {
      setHasMoreToLoadBottom(false);
    }
  };

  const backPage = async () => {
    if (actualPage > 1) {
      setHasMoreToLoadTop(true);
      setLoading(true);
      const response = await getData(actualPage - 1, amount);
      const data = response.data.data;
      actualPage = response.data.page;
      totalPages = response.data.totalPages;
      totalItems = response.data.totalItems;
      setBooksDisplayed(data);
      setLoading(false);
    } else {
      setHasMoreToLoadTop(false);
    }
  };

  const firstRequisiton = async () => {
    setLoading(true);
    setHasMoreToLoadBottom(true);
    setHasMoreToLoadTop(false);
    const response = await getData(PAGE, AMOUNT);
    const data = response.data.data;
    actualPage = response.data.page;
    totalPages = response.data.totalPages;
    totalItems = response.data.totalItems;
    setBooksDisplayed(data);
    setLoading(false);
    if (booksDisplayed.length > 0) {
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
    }
  };

  const handleCategoryArray = categoryName => {
    if (!categoryArray.includes(categoryName)) {
      setCategoryArray([...categoryArray, categoryName]);
    } else {
      const auxCategoryArray = [...categoryArray];
      auxCategoryArray.splice(auxCategoryArray.indexOf(categoryName), 1);
      setCategoryArray(auxCategoryArray);
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  const handleBookSelection = book => {
    setSelectedBook(book);
    toogleDescriptionModalVisibility();
  };

  return (
    <>
      <FilterModal
        visible={filterModalVisibility}
        setVisible={toogleFilterModalVisibility}
        allCategories={bookCategories}
        selectedCategories={categoryArray}
        handleCategoryArray={handleCategoryArray}
        filterByCategory={firstRequisiton}
      />

      <DescriptionModal
        visible={descriptionModalVisibility}
        setVisible={toogleDescriptionModalVisibility}
        book={selectedBook}
      />

      <Container>
        <HeaderContainer>
          <Header color={'#333333'} />
          <LogoutButton onPress={handleSignOut} />
        </HeaderContainer>
        <SearchAndFilterContainer>
          <SearchInput
            value={searchText}
            onChangeText={setSearchText}
            search={() => firstRequisiton()}
          />
          <Filter setModalVisible={setFilterModalVisibility} />
        </SearchAndFilterContainer>
        <BookListContainer>
          {booksDisplayed.length === 0 && !loading && (
            <FooterText>Nenhum livro foi encontrado</FooterText>
          )}
          <FlatList
            ref={flatListRef}
            data={booksDisplayed}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <ListItem data={item} onPress={handleBookSelection} />
            )}
            // onRefresh={hasMoreToLoadTop ? backPage : null}
            // refreshing={loading}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={hasMoreToLoadTop ? backPage : null}
              />
            }
            onEndReached={hasMoreToLoadBottom ? passPage : null}
            onEndReachedThreshold={0.1}
          />
        </BookListContainer>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    marginVertical: 16,
    paddingBottom: 20,
    color: '#666',
  },
});

const ListItem = ({data, onPress}) => (
  <BookCard
    key={data.id}
    book={data}
    onPress={() => onPress(data)}
    imageUrl={''}
    title={''}
    authors={[]}
    pageCount={0}
    publisher={''}
    published={0}
  />
);

export default Home;
