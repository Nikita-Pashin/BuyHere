import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileDataAge } from './getProfileDataAge';

describe('getProfileDataAge.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          age: 100,
        },
      },
    };

    expect(getProfileDataAge(state as StateSchema)).toEqual(100);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDataAge(state as StateSchema)).toEqual(undefined);
  });
});
