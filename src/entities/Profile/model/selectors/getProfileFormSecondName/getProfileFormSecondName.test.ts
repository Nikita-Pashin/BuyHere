import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormSecondName } from './getProfileFormSecondName';

describe('getProfileFormFirstName.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          secondName: 'Jackson',
        },
      },
    };

    expect(getProfileFormSecondName(state as StateSchema)).toEqual('Jackson');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileFormSecondName(state as StateSchema)).toEqual('');
  });
});
