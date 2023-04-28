import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

// styles
import {styles} from './styles';

// assets
import logo from '@assets/registration.png';

// components
import {MyButton} from '@components/MyButton';
import {MyTextInput} from '@components/MyTextInput';
import {MyLink} from '@components/MyLink';

// store
import {signIn} from 'app/store/features/auth';

type Props = NativeStackScreenProps<any>;

function SignIn({navigation}: Props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginIn() {
    dispatch(
      signIn({
        email,
        password,
      }),
    );
  }

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={logo} style={styles.img} />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton onPress={loginIn} title="Entrar no App" />

      <MyLink title="Cadastrar" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

export default SignIn;
