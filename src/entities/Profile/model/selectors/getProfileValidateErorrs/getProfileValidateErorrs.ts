import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidateErorrs = (state: StateSchema) => state.profile?.validateError;
