import React from 'react';

import {SafeAreaView} from 'react-native';
import {HomeScreen} from './app/screens/HomeScreen';

import {SignInScreen} from './app/screens/SignInScreen';
import {colors} from './app/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignInScreen />
    </SafeAreaView>
  );
};

export default App;