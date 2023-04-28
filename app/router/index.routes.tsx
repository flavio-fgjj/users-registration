import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthRoutes from './auth.routes';
import {useAppSelector} from 'app/store';
import AppRoutes from './app.routes';

const StackNavigator = () => {
  const isLoggedIn = useAppSelector(state => state.auth?.isLoggedIn);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default StackNavigator;