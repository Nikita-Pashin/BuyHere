export interface User {
  id: string;
  username: string;
  avatar_url: string;
}

export interface UserSchema {
  authData?: User;
}
