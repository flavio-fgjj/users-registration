import React from 'react';
import {View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

// styles
import {styles} from './styles';

// components
import FAB from '@components/FAB';

type HomeScreenProps = NativeStackScreenProps<any>;

const Home: React.FC<HomeScreenProps> = props => {
  return (
    <View style={styles.container}>
      <FAB onPress={() => props.navigation.push('Contact')} title="+" />
    </View>
  );
};

export default Home;
