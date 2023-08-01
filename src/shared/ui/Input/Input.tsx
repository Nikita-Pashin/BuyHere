import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import s from './Input.module.scss';
import { Sizes } from '../types';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  inputSize?: Sizes,
}

export const Input: FC<InputProps> = ({
  value, onChange, className, inputSize = 'm', ...otherProps
}) => (
  <input
    value={value}
    className={classNames(
      s[inputSize],
      s.input,
      className,
    )}
    onChange={onChange}
    {...otherProps}
  />
);
