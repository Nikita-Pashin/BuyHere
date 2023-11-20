import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormAge = (state: StateSchema) => state.profile?.form?.age || undefined;
