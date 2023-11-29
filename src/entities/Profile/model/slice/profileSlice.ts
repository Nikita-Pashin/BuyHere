import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  readOnly: true,
  data: undefined,
  error: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    cancelEdit: (state) => {
      state.readOnly = true;
      state.form = state.data;
      state.validateError = undefined;
    },
    updateProfileForm: (state, { payload }: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...payload,
      };
    },
  },
  extraReducers: {
    [fetchProfileData.fulfilled.type]: (state, { payload }: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.data = payload;
      state.form = payload;
    },
    [fetchProfileData.pending.type]: (state) => {
      state.isLoading = true;
      state.error = undefined;
    },
    [fetchProfileData.rejected.type]: (state) => {
      state.isLoading = false;
      state.error = 'There was an error loading the profile';
    },
    [updateProfileData.fulfilled.type]: (state, { payload }: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.data = payload;
      state.form = payload;
      state.readOnly = true;
      state.validateError = undefined;
    },
    [updateProfileData.pending.type]: (state) => {
      state.isLoading = true;
      state.validateError = undefined;
    },
    [updateProfileData.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.validateError = action.payload;
    },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
