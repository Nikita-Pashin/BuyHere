export enum ValidateProfileError {
  NO_DATA = 'No data',
  SERVER_ERROR = 'Server error',
  INCORRECT_USER_DATA = 'Incorrect user data',
  INCORRECT_AGE = 'Incorrect user age',
  INCORRECT_COUNTRY = 'Incorrect user country',
}

export interface Profile {
  email?: string;
  firstName?: string;
  secondName?: string;
  age?: number,
  country?: string;
  city?: string,
  username?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readOnly: boolean;
  validateError?: ValidateProfileError[];
}
