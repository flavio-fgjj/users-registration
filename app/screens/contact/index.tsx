import React, {useState} from 'react';
import {View} from 'react-native';

import {MyButton} from '@components/MyButton';
import {styles} from './styles';
import { MyTextInput } from '@components/MyTextInput';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  function save() {
        
  }

  return (
    <View style={styles.container}>
      <MyTextInput placeholder="nome" value={name} onChangeText={setName} />
      <MyTextInput placeholder="telefone" value={phone} onChangeText={setPhone} />
      <MyTextInput placeholder="email" value={email} onChangeText={setEmail} />
      <MyButton onPress={save} title="Salvar" style={styles.btn}/>
    </View>
  );
}
