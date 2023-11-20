import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormUsername } from './getProfileFormUsername';

describe('getProfileFormUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          username: 'newUser1337',
        },
      },
    };

    expect(getProfileFormUsername(state as StateSchema)).toEqual('newUser1337');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileFormUsername(state as StateSchema)).toEqual('');
  });
});
