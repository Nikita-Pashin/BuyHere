import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import s from './ButtonIconUI.module.scss';
import { CommonButtonUIProps } from '../types/ButtonTypes';

export interface ButtonIconUIProps extends CommonButtonUIProps {
  children: ReactNode,
  round?: boolean,
}

export const ButtonIconUI: FC<ButtonIconUIProps> = ({
  children, round, classNameButton, disabled, invertedTheme, nonInteractive, size,
}) => (
  <div
    className={classNames(
      s.buttonIconUI,
      round && s.round,
      classNameButton,
      s[size],
      disabled && s.disabled,
      invertedTheme && s.invertedTheme,
      nonInteractive && s.nonInteractive,
    )}
  >
    {children}
  </div>
);
