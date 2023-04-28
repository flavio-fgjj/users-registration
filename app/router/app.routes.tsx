import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import HomeScreen from '@screens/home';
import ContactScreen from '@screens/contact';
import HeaderHome from '@components/HeaderHome';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Contact: undefined;
};

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: () => <HeaderHome />,
        }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Contato',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
