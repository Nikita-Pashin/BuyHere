import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserAvatarUrl = (state: StateSchema) => state.user?.authData?.avatar_url || '';
