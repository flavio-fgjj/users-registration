import React from 'react';

import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import Routes from '@router/index.routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
