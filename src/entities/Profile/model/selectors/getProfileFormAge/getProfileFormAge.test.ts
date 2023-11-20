import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormAge } from './getProfileFormAge';

describe('getProfileFormAge.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          age: 100,
        },
      },
    };

    expect(getProfileFormAge(state as StateSchema)).toEqual(100);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileFormAge(state as StateSchema)).toEqual(undefined);
  });
});
