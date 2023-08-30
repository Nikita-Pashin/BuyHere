import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { TextL } from 'shared/ui/Typography';
import { loginActions } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    isLoading,
    password,
    username,
    error,
  } = useSelector(getLoginState);

  const onChangeUsername = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(value));
  };

  const onLoginClick = () => {
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <div>
      {!!error && (
        <div className={s.error}>
          <TextL>
            {t(error)}
          </TextL>
        </div>
      )}
      <div className={s.input}>
        <Input
          value={username}
          onChange={onChangeUsername}
          stretch
        />
      </div>
      <div className={s.input}>
        <Input
          value={password}
          onChange={onChangePassword}
          stretch
        />
      </div>
      <Button
        className={s.button}
        typeButton="ButtonSquare"
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Log in')}
      </Button>
    </div>
  );
};
