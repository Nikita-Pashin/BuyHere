import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import s from './LoginForm.module.scss';

interface Fields {
  username: string,
  password: string,
}

export const LoginForm = () => {
  const { t } = useTranslation();

  const [fields, setFields] = useState<Fields>({
    username: '',
    password: '',
  });

  const onChangeField = (
    { currentTarget: { value } }: ChangeEvent<HTMLInputElement>,
    field: keyof Fields,
  ) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <div className={s.input}>
        <Input
          value={fields.username}
          onChange={(e) => onChangeField(e, 'username')}
        />
      </div>
      <div className={s.input}>
        <Input
          value={fields.password}
          onChange={(e) => onChangeField(e, 'password')}
        />
      </div>
      <Button
        className={s.button}
        typeButton="ButtonSquare"
        onClick={() => {}}
      >
        {t('Log in')}
      </Button>
    </div>
  );
};
