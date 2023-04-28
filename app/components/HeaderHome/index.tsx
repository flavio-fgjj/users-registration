import React, {useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// store
import {useAppSelector} from 'app/store';
import {signOut} from 'app/store/features/auth';

// assets
import logo from '../../assets/registration.png';

// styles
import {styles} from './styles';

function HeaderHome() {
    const user = useAppSelector(state => state.auth?.user);

  const dispatch = useDispatch();

  function loginOut() {
    dispatch(signOut());
  }

  return (
    <View style={styles.headerHomeContainer}>
      <View style={styles.viewLeft}>
        <Image source={logo} style={styles.logoHeaderHome} />
        <Text style={styles.textHeaderHome}>{user.name}</Text>
      </View>

      <Pressable onPress={() => loginOut()}>
        <Icon name='logout-variant' size={30} color={'#000'}></Icon>
      </Pressable>
    </View>
  );
  }
  
  export default HeaderHome;
  