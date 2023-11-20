import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileDataFirstName = (state: StateSchema) => state.profile?.data?.firstName || '';
