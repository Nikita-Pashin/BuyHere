import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErorrs } from './getProfileValidateErorrs';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErorrs.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_COUNTRY,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    };

    expect(getProfileValidateErorrs(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErorrs(state as StateSchema)).toEqual(undefined);
  });
});
