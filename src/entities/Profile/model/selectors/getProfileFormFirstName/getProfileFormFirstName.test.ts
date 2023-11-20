import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFormFirstName } from './getProfileFormFirstName';

describe('getProfileFormFirstName.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          firstName: 'Mick',
        },
      },
    };

    expect(getProfileFormFirstName(state as StateSchema)).toEqual('Mick');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileFormFirstName(state as StateSchema)).toEqual('');
  });
});
