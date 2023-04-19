import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthRoutes from './auth.routes';

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default StackNavigator;
