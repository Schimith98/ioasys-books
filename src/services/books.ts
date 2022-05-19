import api from './api';
import AsyncStorage from '@react-native-community/async-storage';

interface IParams {
  params: string;
}

export const booksService = {
  getBooks: async params => {
    const access_token = await AsyncStorage.getItem('@RNAuth:token');
    return api.get(`/books${params}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },

  getBook: id => api.get(`/books/${id}`),
};
