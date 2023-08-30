import { FC, InputHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import s from './Input.module.scss';
import { Sizes } from '../types';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: string,
  className?: string,
  inputSize?: Sizes,
  stretch?: boolean,
}

export const Input: FC<InputProps> = ({
  value, onChange, className, inputSize = 'm', stretch, ...otherProps
}) => {
  const { t } = useTranslation();

  return (
    <input
      value={value}
      className={classNames(
        s[inputSize],
        s.input,
        className,
        stretch && s.stretch,
      )}
      onChange={onChange}
      placeholder={t('Enter text')}
      {...otherProps}
    />
  );
};
