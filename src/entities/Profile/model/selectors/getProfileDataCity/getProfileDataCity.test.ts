import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileDataCity } from './getProfileDataCity';

describe('getProfileDataCity.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          city: 'NY',
        },
      },
    };

    expect(getProfileDataCity(state as StateSchema)).toEqual('NY');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDataCity(state as StateSchema)).toEqual('');
  });
});
