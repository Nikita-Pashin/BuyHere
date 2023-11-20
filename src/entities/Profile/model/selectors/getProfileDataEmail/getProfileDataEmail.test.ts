import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileDataEmail } from './getProfileDataEmail';

describe('getProfileDataEmail.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          email: 'test@email.com',
        },
      },
    };

    expect(getProfileDataEmail(state as StateSchema)).toEqual('test@email.com');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDataEmail(state as StateSchema)).toEqual('');
  });
});
