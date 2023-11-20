import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileDataEmail = (state: StateSchema) => state.profile?.data?.email || '';
