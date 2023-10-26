import { ChangeEvent, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TextL } from 'shared/ui/Typography';
import { getLoginUsername } from 'feature/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from 'feature/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'feature/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'feature/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

const initialReducers: ReducersList = {
  login: loginReducer,
};

interface LoginFormProps {
  onSuccess: () => void,
}

const LoginForm: FC<LoginFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const password = useSelector(getLoginPassword);

  const onChangeUsername = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(value));
  };

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
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
          tag="button"
        >
          {t('Log in')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
