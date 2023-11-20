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
}
