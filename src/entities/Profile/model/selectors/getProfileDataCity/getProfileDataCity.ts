import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileDataCity = (state: StateSchema) => state.profile?.data?.city || '';
