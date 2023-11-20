import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAvatarUrl } from './getUserAvatarUrl';

describe('getUserAuthData.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          avatar_url: '_avatar_url',
        },
      },
    };

    expect(getUserAvatarUrl(state as StateSchema)).toEqual('_avatar_url');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUserAvatarUrl(state as StateSchema)).toEqual('');
  });
});
