import { TestAsyncFunc } from 'shared/lib/tests/TestAsyncFunc/TestAsyncFunc';
import { updateProfileData } from './updateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const profileData: Profile = {
  age: 99,
  city: 'Any city',
  country: 'Any country',
  email: 'Any email',
  firstName: 'Any firstName',
  secondName: 'Any secondName',
  username: 'username',
};

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncFunc(
      updateProfileData,
      {
        profile: {
          form: profileData,
        },
      },
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunc();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(profileData);
  });

  test('error', async () => {
    const thunk = new TestAsyncFunc(
      updateProfileData,
      {
        profile: {
          form: profileData,
        },
      },
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunc();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncFunc(
      updateProfileData,
      {
        profile: {
          form: {
            ...profileData,
            age: undefined,
          },
        },
      },
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunc();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
