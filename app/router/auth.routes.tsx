import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '@screens/signIn';

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
