import React, {useState} from 'react';
import {View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import {MyButton} from '@components/MyButton';
import {styles} from './styles';
import {MyTextInput} from '@components/MyTextInput';

import { addContact, updateContact } from 'app/store/features/contact';

import {useAppSelector} from 'app/store';

type Props = NativeStackScreenProps<any>;

export default function Contact({navigation, route}: Props) {
  const contact = route.params?.contact || {};

  const dispatch = useDispatch();

  const [name, setName] = useState<string>(contact.name || '');
  const [phone, setPhone] = useState<string>(contact.phone || '');
  const [email, setEmail] = useState<string>(contact.email || '');

  const user = useAppSelector(state => state.auth?.user);

  function save() {
    if (contact.email) {
      dispatch(
        updateContact({
          name, 
          phone, 
          email, 
          emailUser: user.email, 
          navigation
        })
      )
    } else {
      dispatch(
        addContact({
          name, 
          phone, 
          email, 
          emailUser: user.email, 
          navigation
        })
      )
    }
  }

  return (
    <View style={styles.container}>
      <MyTextInput placeholder="nome" value={name} onChangeText={setName} />
      <MyTextInput
        placeholder="telefone"
        value={phone}
        onChangeText={setPhone}
      />
      <MyTextInput placeholder="email" value={email} onChangeText={setEmail} />
      <MyButton onPress={save} title="Salvar" style={styles.btn} />
    </View>
  );
}
