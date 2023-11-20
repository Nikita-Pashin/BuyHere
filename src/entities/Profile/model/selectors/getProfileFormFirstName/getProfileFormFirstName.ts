import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormFirstName = (state: StateSchema) => state.profile?.form?.firstName || '';
