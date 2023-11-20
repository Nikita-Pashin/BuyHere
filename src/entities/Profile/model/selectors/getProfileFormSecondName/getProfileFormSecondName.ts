import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormSecondName = (state: StateSchema) => state.profile?.form?.secondName || '';
