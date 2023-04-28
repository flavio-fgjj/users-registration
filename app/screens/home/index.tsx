import React, { startTransition } from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// styles
import {styles} from './styles';

// components
import FAB from '@components/FAB';

import {useAppSelector} from 'app/store';
import { deleteContact } from 'app/store/features/contact';

type HomeScreenProps = NativeStackScreenProps<any>;

const Home: React.FC<HomeScreenProps> = props => {
  const dispatch = useDispatch();

  const user = useAppSelector(state => state.auth?.user);
  const contacts = useAppSelector(state => state.contact?.contacts);
  
  function delContact(id: string) {
    dispatch(
      deleteContact(id)
    )
  }

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.card}>
        <View style={styles.info}>
          <Text>{item.name} | {item.phone}</Text>
          <Text>{item.email}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => delContact(item.id)}>
            <Icon name='trash-can-outline' size={30} color={'red'}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}} onPress={() => props.navigation.push('Contact', {contact: item})}>
            <Icon name='account-edit' size={30} color={'blue'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={contacts.filter(c => c.emailUser === user.email).sort((a, b) => {
          const nameA = a.name.toUpperCase()
          const nameB = b.name.toUpperCase()
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }

          return 0;
        })}
        renderItem={renderItem}
        keyExtractor={(item) => item.email}
      />
      <FAB onPress={() => props.navigation.push('Contact')} title="+" />
    </View>
  );
};

export default Home;
