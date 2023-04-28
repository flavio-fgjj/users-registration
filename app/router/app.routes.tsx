import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import HomeScreen from '@screens/home';
import ContactScreen from '@screens/contact';

import { colors } from 'app/colors';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  ContactScreen: undefined;
};

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{headerShown: true, headerTintColor: '#fff', headerStyle: {
          backgroundColor: colors.primary,
        }}}
        
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
