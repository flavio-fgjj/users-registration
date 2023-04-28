import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import Snackbar from 'react-native-snackbar';
import uuid from 'react-native-uuid';

import {validateEmail} from 'app/utils';

interface IContact {
	id: string;
  name: string;
  email: string;
  phone: string;
  emailUser: string;
}

interface IContactPayload extends IContact {
	navigation: NativeStackNavigationProp<any>;
}

const initialState = {
  contacts: [] as IContact[],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<IContactPayload>) => {
      const {id, name, email, phone, emailUser, navigation} = action.payload;

      if (!name || !email || !phone) {
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

      if (state.contacts.find(contact => contact.email === email || contact.phone === phone)) {
        Snackbar.show({
          text: 'Contato já existe',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      } else {
        const newContact = {
					id: uuid.v4().toString(), name, email, phone, emailUser
				}

				state.contacts.push(newContact);

        Snackbar.show({
          text: 'Contacto criado com sucesso',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'green',
        });
        navigation.goBack();
      }
    },
		updateContact: (state, action: PayloadAction<IContactPayload>) => {
      const {id, name, email, phone, emailUser, navigation} = action.payload;

      if (!name || !email || !phone) {
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

      let objIndex = state.contacts.findIndex((c => c.id === id))
      state.contacts[objIndex].email = email
      state.contacts[objIndex].name = name
      state.contacts[objIndex].phone = phone

			Snackbar.show({
				text: 'Contato atualizado com sucesso',
				duration: Snackbar.LENGTH_LONG,
				backgroundColor: 'green',
			});
			navigation.goBack();

    },
		deleteContact: (state, action: PayloadAction<string>) => {

			Snackbar.show({
				text: 'Contato removido com sucesso',
				duration: Snackbar.LENGTH_LONG,
				backgroundColor: 'green',
			});

			state.contacts = state.contacts.filter(c => c.id !== action.payload)
		}
  },
});

export const {addContact, updateContact, deleteContact} = contactSlice.actions;

export default contactSlice.reducer;
