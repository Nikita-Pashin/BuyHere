import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  EditableProfileButtons, profileReducer, EditableProfile, fetchProfileData,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import s from './ProfileAccountDetails.module.scss';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfileAccountDetails = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <EditableProfile />
      <EditableProfileButtons className={s.editableProfileButtons} />
    </DynamicModuleLoader>
  );
};

export default ProfileAccountDetails;
