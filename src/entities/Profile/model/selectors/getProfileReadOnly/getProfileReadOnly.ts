import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readOnly ?? true;
