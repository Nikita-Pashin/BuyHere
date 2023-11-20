import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileDataSecondName = (state: StateSchema) => state.profile?.data?.secondName || '';
