import React, {useContext} from 'react';

import {useAuth} from '../context/auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';
import Loading from '../components/Loading/Loading';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
