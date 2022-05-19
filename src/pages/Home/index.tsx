import React, {useState, useEffect} from 'react';
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
import {FlatList, View, ActivityIndicator, StyleSheet} from 'react-native';

import DescriptionModal, {IBook} from '../../components/DescriptionModal';
import Loading from '../../components/Loading/Loading';

const PAGE_DEFAULT = 1;
const AMOUNT_DEFAULT = 25;
let totalItems = 500;

let totalPages = totalItems / AMOUNT_DEFAULT;

const Home: React.FC = () => {
  const {user, signOut} = useAuth();

  const [filterModalVisibility, setFilterModalVisibility] = useState(false);
  const toogleFilterModalVisibility = () =>
    setFilterModalVisibility(!filterModalVisibility);

  const [descriptionModalVisibility, setDescriptionModalVisibility] =
    useState(false);
  const toogleDescriptionModalVisibility = () =>
    setDescriptionModalVisibility(!descriptionModalVisibility);

  const [page, setPage] = useState(PAGE_DEFAULT);
  const [searchText, setSearchText] = useState('');

  const [selectedBook, setSelectedBook] = useState<IBook>(null);

  const [shownArray, setShownArray] = useState([]);

  const [categoryArray, setCategoryArray] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadData = async isTheFirstPage => {
    if (loading) return;
    const actualPage = isTheFirstPage ? PAGE_DEFAULT : page;
    totalPages = isTheFirstPage ? totalItems / AMOUNT_DEFAULT : totalPages;
    if (actualPage - 1 < totalPages) {
      setLoading(true);
      try {
        const params = await mountParams(actualPage);
        const response = await booksService.getBooks(params);
        totalPages = response.data.totalPages;
        setShownArray(
          isTheFirstPage
            ? response.data.data
            : state => [...state, ...response.data.data],
        );
        setPage(actualPage + 1);
      } catch (error) {
        if (error.response.status === 401) {
          alert('Sua sessão expirou!');
          handleSignOut();
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const mountParams = async page => {
    let params = `?page=${page}&amount=${AMOUNT_DEFAULT}&title=${searchText}`;
    let categoryParams = '';
    for (let index = 0; index < categoryArray.length; index++) {
      const category = categoryArray[index];
      categoryParams = `${categoryParams}&category=${category}`;
    }
    return params + categoryParams;
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

  useEffect(() => {
    loadData(true);
  }, []);

  const handleBookSelection = book => {
    setSelectedBook(book);
    toogleDescriptionModalVisibility();
  };

  const renderItem = ({item}) => (
    <BookCard
      book={item}
      onPress={() => handleBookSelection(item)}
      imageUrl={''}
      title={''}
      authors={[]}
      pageCount={0}
      publisher={''}
      published={0}
    />
  );

  const renderFooter = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <>
      <FilterModal
        visible={filterModalVisibility}
        setVisible={toogleFilterModalVisibility}
        allCategories={bookCategories}
        selectedCategories={categoryArray}
        handleCategoryArray={handleCategoryArray}
        filterByCategory={loadData}
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
            search={loadData}
          />
          <Filter setModalVisible={setFilterModalVisibility} />
        </SearchAndFilterContainer>
        <BookListContainer>
          {loading && <Loading />}
          {shownArray.length === 0 ? (
            <FooterText>Nenhum livro foi encontrado</FooterText>
          ) : (
            <FlatList
              data={shownArray}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onEndReached={() => loadData(false)}
              onEndReachedThreshold={0.1}
              style={{paddingTop: 32}}
            />
          )}
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

export default Home;
