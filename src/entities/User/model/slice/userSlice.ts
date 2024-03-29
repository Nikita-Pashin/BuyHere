import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = { _inited: false };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
    },
    setLogOut: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      state._inited = true;

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
