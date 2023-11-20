import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserAuthDataUsername = (state: StateSchema) => state.user?.authData?.username || '';
