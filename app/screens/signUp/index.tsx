import React, {useState} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';

import logo from '@assets/registration.png';
import {MyButton} from '@components/MyButton';
import {MyTextInput} from '@components/MyTextInput';
import {MyLink} from '@components/MyLink';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {addUser} from 'app/store/features/auth';

type Props = NativeStackScreenProps<any>;

function SignUp({navigation}: Props) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function signUp() {
    dispatch(
      addUser({
        name,
        email,
        password,
        passwordConfirm,
        navigation,
      }),
    );
  }

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={logo} style={styles.img} />
      <MyTextInput placeholder="nome" value={name} onChangeText={setName} />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <MyTextInput
        placeholder="confirmar senha"
        secureTextEntry
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
      />

      <MyButton onPress={signUp} title="Cadastrar" />

      <MyLink title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SignUp;
