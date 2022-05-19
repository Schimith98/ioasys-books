import api from './api';

interface ILoginData {
  email: string;
  password: string;
}

interface IRefreshToken {
  refreshToken: string;
}

export const signIn = (data: ILoginData) => api.post('/auth/sign-in', data);
