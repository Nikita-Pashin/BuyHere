import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('without secondname', async () => {
    const result = validateProfileData({
      ...profileData,
      secondName: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without age', async () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('with nothing', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
