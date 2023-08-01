import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginShema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  isLoading: false,
  password: '',
  username: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<LoginSchema['username']>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<LoginSchema['password']>) => {
      state.password = payload;
    },
  },
  extraReducers: {
    [loginByUsername.pending.type]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [loginByUsername.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [loginByUsername.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
