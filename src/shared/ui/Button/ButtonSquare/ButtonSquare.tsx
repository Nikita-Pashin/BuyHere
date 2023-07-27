import { FC } from 'react';
import classNames from 'classnames';
import s from './ButtonSquare.module.scss';
import { CommonButtonProps } from '../types/CommonButtonProps';

export type ButtonSquareProps = CommonButtonProps;

export const ButtonSquare: FC<ButtonSquareProps> = ({
  children, size, className, ...otherProps
}) => (
  <button
    type="button"
    className={classNames(
      s[size],
      className,
      s.buttonSquare,
    )}
    {...otherProps}
  >
    {children}
  </button>
);
