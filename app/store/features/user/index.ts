import {createSlice} from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null as IUser | null,
    isLoggedIn: false,
  },
  reducers: {
    signIn: state => {
      state.user = {} as IUser;
      state.isLoggedIn = true;
    },
    signOut: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;
