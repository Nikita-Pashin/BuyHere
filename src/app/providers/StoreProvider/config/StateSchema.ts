import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername/model/types/loginShema';

export interface StateSchema {
  user: UserSchema;
  login?: LoginSchema,
}
