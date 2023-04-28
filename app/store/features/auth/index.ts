import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {validateEmail} from 'app/utils';
import Snackbar from 'react-native-snackbar';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const initialState = {
  users: [] as IUser[],
  user: {} as IUser,
  isLoggedIn: false,
};

interface IUserPayload extends IUser {
  passwordConfirm: string;
  navigation: NativeStackNavigationProp<any>;
}

interface ILoginPayload {
  password: string;
  email: string;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserPayload>) => {
      const {name, email, password, passwordConfirm, navigation} =
        action.payload;

      if (!name || !email || !password || !passwordConfirm) {
        Snackbar.show({
          text: 'Por favor, preencha todos os campos',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
        return;
      }

      if (!validateEmail(email)) {
        Snackbar.show({
          text: 'Por favor, digite um email válido',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
        return;
      }

      if (password !== passwordConfirm) {
        Snackbar.show({
          text: 'Por favor, senhas devem ser iguais',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
        return;
      }

      if (state.users.find(user => user.email === email)) {
        Snackbar.show({
          text: 'Usuário já existe',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      } else {
        state.users.push(action.payload);
        Snackbar.show({
          text: 'Usuário criado com sucesso',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'green',
        });
        navigation.goBack();
      }
    },
    signIn: (state, action: PayloadAction<ILoginPayload>) => {
      const {email, password} = action.payload;
      const user = state.users?.find(
        u => u.email === email && u.password === password,
      );
      if (user) {
        state.user = user;
        state.isLoggedIn = true;
      } else {
        Snackbar.show({
          text: 'Usuário ou senha inválidos',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      }
    },
    signOut: state => {
      state.user = {} as IUser;
      state.isLoggedIn = false;
    },
  },
});

export const {addUser, signIn, signOut} = authSlice.actions;

export default authSlice.reducer;
