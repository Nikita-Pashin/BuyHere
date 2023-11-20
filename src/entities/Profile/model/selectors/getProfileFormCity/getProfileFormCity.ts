import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormCity = (state: StateSchema) => state.profile?.form?.city || '';
