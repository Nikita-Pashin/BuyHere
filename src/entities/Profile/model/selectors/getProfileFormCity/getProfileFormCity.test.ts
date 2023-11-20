import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormCity } from './getProfileFormCity';

describe('getProfileFormCity.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          city: 'London',
        },
      },
    };

    expect(getProfileFormCity(state as StateSchema)).toEqual('London');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileFormCity(state as StateSchema)).toEqual('');
  });
});
