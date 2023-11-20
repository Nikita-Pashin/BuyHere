import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileDataSecondName } from './getProfileDataSecondName';

describe('getProfileDataSecondName.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          secondName: 'secondName',
        },
      },
    };

    expect(getProfileDataSecondName(state as StateSchema)).toEqual('secondName');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDataSecondName(state as StateSchema)).toEqual('');
  });
});
