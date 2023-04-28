import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';


// icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// pages
import HomeScreen from '@screens/home';
import ContactScreen from '@screens/contact';

// styles
import { colors } from 'app/colors';

// assets
import logo from '../assets/registration.png';
import logout from '../assets/logout.png';

// store
import { signOut } from 'app/store/features/auth';

const Stack = createNativeStackNavigator();

type Props = NativeStackScreenProps<any>;

export type RootStackParamList = {
  HomeScreen: undefined;
  ContactScreen: undefined;
};

const styles = StyleSheet.create({
  headerHomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 30
  },
  logoHeaderHome: {
    width: 40,
    height: 40
  },
  logoutImg: {
    width: 30,
    height: 32
  },
  textHeaderHome: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold', 
    paddingLeft: 15 
  },
  viewLeft: {
    flexDirection: 'row',
    alignItems: 'center', 
  }
});

function HeaderHome() {
  const dispatch = useDispatch();

  function loginOut() {
    dispatch(
      signOut()
    );
  }

  return (
    <View style={styles.headerHomeContainer}>
      <View style={styles.viewLeft}>
        <Image source={logo} style={styles.logoHeaderHome}></Image>
        <Text style={styles.textHeaderHome}>Nome do Usuário</Text>
      </View>

        <Pressable onPress={() => loginOut()}>
          <Image source={logout} style={styles.logoutImg}></Image>
        </Pressable>
    </View>
  )
}

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <HeaderHome />
        }}
      />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          headerShown: true, 
          headerTintColor: '#fff', headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
        
        
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
