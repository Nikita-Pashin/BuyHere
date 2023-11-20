import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileDataFirstName } from './getProfileDataFirstName';

describe('getProfileDataFirstName.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          firstName: 'Jack',
        },
      },
    };

    expect(getProfileDataFirstName(state as StateSchema)).toEqual('Jack');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDataFirstName(state as StateSchema)).toEqual('');
  });
});
