import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: false,
      },
    };

    expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });
});
