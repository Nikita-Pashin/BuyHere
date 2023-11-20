import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileDataUsername } from './getProfileDataUsername';

describe('getProfileDataUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          username: 'newUser1337',
        },
      },
    };

    expect(getProfileDataUsername(state as StateSchema)).toEqual('newUser1337');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDataUsername(state as StateSchema)).toEqual('');
  });
});
