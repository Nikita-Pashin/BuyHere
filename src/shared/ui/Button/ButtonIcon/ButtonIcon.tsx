import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';
import s from './ButtonIcon.module.scss';

export interface ButtonIconProps extends ButtonBaseProps {
  children: ReactNode,
  round?: boolean,
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  children, round, className, ...restProps
}) => (
  <ButtonBase
    className={classNames(
      s.buttonIcon,
      round && s.round,
      className,
    )}
    {...restProps}
  >
    {children}
  </ButtonBase>
);
