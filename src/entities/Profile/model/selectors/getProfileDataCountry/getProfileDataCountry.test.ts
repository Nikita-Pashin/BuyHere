import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileDataCountry } from './getProfileDataCountry';

describe('getProfileDataCountry.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          country: 'USA',
        },
      },
    };

    expect(getProfileDataCountry(state as StateSchema)).toEqual('USA');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDataCountry(state as StateSchema)).toEqual('');
  });
});
