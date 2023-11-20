import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileDataCountry = (state: StateSchema) => state.profile?.data?.country || '';
