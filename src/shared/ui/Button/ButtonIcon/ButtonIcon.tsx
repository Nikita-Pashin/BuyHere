import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import s from './ButtonIcon.module.scss';
import { CommonButtonUIProps } from '../types/ButtonTypes';

export interface ButtonIconProps extends CommonButtonUIProps {
  children: ReactNode,
  round?: boolean,
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  children, round, className, ...restProps
}) => (
  <div
    className={classNames(
      s.buttonIcon,
      round && s.round,
      className,
    )}
    {...restProps}
  >
    {children}
  </div>
);
