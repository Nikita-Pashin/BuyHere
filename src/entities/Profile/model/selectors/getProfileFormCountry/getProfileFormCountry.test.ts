import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormCountry } from './getProfileFormCountry';

describe('getProfileFormCountry.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          country: 'USA',
        },
      },
    };

    expect(getProfileFormCountry(state as StateSchema)).toEqual('USA');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileFormCountry(state as StateSchema)).toEqual('');
  });
});
