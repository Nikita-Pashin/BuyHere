import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    country, age, firstName, secondName,
  } = profile;
  const error: ValidateProfileError[] = [];

  if (!firstName || !secondName) {
    error.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!country) {
    error.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!age) {
    error.push(ValidateProfileError.INCORRECT_AGE);
  }

  return error;
};
