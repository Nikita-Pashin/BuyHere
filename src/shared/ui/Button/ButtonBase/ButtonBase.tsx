import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';
import s from './ButtonBase.module.scss';

export interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className?: string,
}

export const ButtonBase: FC<ButtonBaseProps> = ({ children, className, ...restProps }) => (
  <button
    type="button"
    className={classNames(s.buttonBase, className)}
    {...restProps}
  >
    {children}
  </button>
);
