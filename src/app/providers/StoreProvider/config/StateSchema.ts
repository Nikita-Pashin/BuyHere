import {
  AnyAction,
  CombinedState,
  ReducersMapObject,
  Reducer,
  EnhancedStore,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile/model/types/profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername/model/types/loginShema';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
  user: UserSchema;
  login?: LoginSchema,
  profile?: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager,
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate: NavigateFunction,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
}
