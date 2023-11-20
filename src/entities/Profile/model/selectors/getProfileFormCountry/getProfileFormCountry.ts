import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormCountry = (state: StateSchema) => state.profile?.form?.country || '';
