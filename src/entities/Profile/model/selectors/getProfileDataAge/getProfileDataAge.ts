import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileDataAge = (state: StateSchema) => state.profile?.data?.age || undefined;
