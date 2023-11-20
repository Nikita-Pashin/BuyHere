import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormUsername = (state: StateSchema) => state.profile?.form?.username || '';
