import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthDataUsername } from './getUserAuthDataUsername';

describe('getUserAuthDataUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: '_username',
        },
      },
    };

    expect(getUserAuthDataUsername(state as StateSchema)).toEqual('_username');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUserAuthDataUsername(state as StateSchema)).toEqual('');
  });
});
