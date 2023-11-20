import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormEmail = (state: StateSchema) => state.profile?.form?.email || '';
