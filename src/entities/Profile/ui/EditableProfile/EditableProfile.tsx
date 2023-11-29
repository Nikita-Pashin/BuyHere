import { FormEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from 'shared/ui/Input';
import {
  getProfileDataEmail, profileActions, getProfileDataAge,
  getProfileDataCountry, getProfileDataCity, getProfileDataUsername,
  getProfileDataSecondName, getProfileDataFirstName, getProfileIsLoading, getProfileReadOnly,
  getProfileFormEmail, getProfileFormAge, getProfileFormFirstName, getProfileFormSecondName,
  getProfileFormUsername, getProfileFormCountry, getProfileFormCity, getProfileValidateErorrs,
} from 'entities/Profile';
import s from './EditableProfile.module.scss';

export const EditableProfile = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const dataEmail = useSelector(getProfileDataEmail);
  const dataAge = useSelector(getProfileDataAge);
  const dataFirstName = useSelector(getProfileDataFirstName);
  const dataSecondName = useSelector(getProfileDataSecondName);
  const dataUsername = useSelector(getProfileDataUsername);
  const dataCountry = useSelector(getProfileDataCountry);
  const dataCity = useSelector(getProfileDataCity);

  const formEmail = useSelector(getProfileFormEmail);
  const formAge = useSelector(getProfileFormAge);
  const formFirstName = useSelector(getProfileFormFirstName);
  const formSecondName = useSelector(getProfileFormSecondName);
  const formUsername = useSelector(getProfileFormUsername);
  const formCountry = useSelector(getProfileFormCountry);
  const formCity = useSelector(getProfileFormCity);

  const isLoading = useSelector(getProfileIsLoading);
  const readOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErorrs);

  const email = readOnly ? dataEmail : formEmail;
  const age = readOnly ? dataAge : formAge;
  const firstName = readOnly ? dataFirstName : formFirstName;
  const secondName = readOnly ? dataSecondName : formSecondName;
  const username = readOnly ? dataUsername : formUsername;
  const country = readOnly ? dataCountry : formCountry;
  const city = readOnly ? dataCity : formCity;

  const onChangeEmail = useCallback(({ currentTarget: { value } }: FormEvent<HTMLInputElement>) => {
    dispatch(profileActions.updateProfileForm({ email: value }));
  }, [dispatch]);

  const onChangeAge = useCallback(({ currentTarget: { value } }: FormEvent<HTMLInputElement>) => {
    dispatch(profileActions.updateProfileForm({ age: value }));
  }, [dispatch]);

  const onChangeFirstName = useCallback((
    { currentTarget: { value } }: FormEvent<HTMLInputElement>,
  ) => {
    dispatch(profileActions.updateProfileForm({ firstName: value }));
  }, [dispatch]);

  const onChangeSecondName = useCallback((
    { currentTarget: { value } }: FormEvent<HTMLInputElement>,
  ) => {
    dispatch(profileActions.updateProfileForm({ secondName: value }));
  }, [dispatch]);

  const onChangeUsername = useCallback((
    { currentTarget: { value } }: FormEvent<HTMLInputElement>,
  ) => {
    dispatch(profileActions.updateProfileForm({ username: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((
    { currentTarget: { value } }: FormEvent<HTMLInputElement>,
  ) => {
    dispatch(profileActions.updateProfileForm({ country: value }));
  }, [dispatch]);

  const onChangeCity = useCallback((
    { currentTarget: { value } }: FormEvent<HTMLInputElement>,
  ) => {
    dispatch(profileActions.updateProfileForm({ city: value }));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Input
        classNameWrapper={s.input}
        value={email}
        onChange={onChangeEmail}
        label={t('Email')}
        placeholder={readOnly ? 'Email missing' : 'Enter email'}
        readOnly={readOnly}
        required
      />
      <Input
        classNameWrapper={s.input}
        value={age ? String(age) : ''}
        onChange={onChangeAge}
        label={t('Age')}
        placeholder={readOnly ? 'Age missing' : 'Enter your age'}
        readOnly={readOnly}
      />
      <Input
        classNameWrapper={s.input}
        value={firstName}
        onChange={onChangeFirstName}
        label={t('First name')}
        placeholder={readOnly ? 'First name missing' : 'Enter your first name'}
        readOnly={readOnly}
        required
      />
      <Input
        classNameWrapper={s.input}
        value={secondName}
        onChange={onChangeSecondName}
        label={t('Second name')}
        placeholder={readOnly ? 'Second name missing' : 'Enter your second name'}
        readOnly={readOnly}
      />
      <Input
        classNameWrapper={s.input}
        value={username}
        onChange={onChangeUsername}
        label={t('Username')}
        placeholder={readOnly ? 'Username missing' : 'Enter your username'}
        readOnly={readOnly}
        required
      />
      <Input
        classNameWrapper={s.input}
        value={country}
        onChange={onChangeCountry}
        label={t('Country')}
        placeholder={readOnly ? 'Country missing' : 'Enter your country'}
        readOnly={readOnly}
      />
      <Input
        classNameWrapper={s.input}
        value={city}
        onChange={onChangeCity}
        label={t('City')}
        placeholder={readOnly ? 'City missing' : 'Enter your city'}
        readOnly={readOnly}
      />
      {validateErrors && validateErrors.map((err) => (
        <div key={err}>{t(err)}</div>
      ))}
    </div>
  );
};
