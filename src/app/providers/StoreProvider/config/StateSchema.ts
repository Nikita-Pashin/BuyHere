import {
  AnyAction,
  CombinedState,
  ReducersMapObject,
  Reducer,
  EnhancedStore,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername/model/types/loginShema';

export interface StateSchema {
  user: UserSchema;
  login?: LoginSchema,
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
