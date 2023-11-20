import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileDataUsername = (state: StateSchema) => state.profile?.data?.username || '';
