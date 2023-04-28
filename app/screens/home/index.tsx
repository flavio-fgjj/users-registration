import React from 'react';
import {View} from 'react-native';

import { NativeStackScreenProps } from "@react-navigation/native-stack";

// styles
import {styles} from './styles';

// components
import FAB from '@components/FAB';
import { RootStackParamList } from '@router/app.routes';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const Home: React.FC<HomeScreenProps> = (props) => {
  
  return (
    <View style={styles.container}>
      <FAB onPress={() => props.navigation.push("ContactScreen")} title="+" />
    </View>
  );
}


export default Home;