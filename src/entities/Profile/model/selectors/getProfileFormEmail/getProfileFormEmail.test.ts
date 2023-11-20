import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormEmail } from './getProfileFormEmail';

describe('getProfileFormEmail.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          email: 'test@email.com',
        },
      },
    };

    expect(getProfileFormEmail(state as StateSchema)).toEqual('test@email.com');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileFormEmail(state as StateSchema)).toEqual('');
  });
});
