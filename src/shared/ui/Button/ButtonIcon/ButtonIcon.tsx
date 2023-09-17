import { FC, ReactNode } from 'react';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';
import s from './ButtonIcon.module.scss';

interface ButtonIconProps extends ButtonBaseProps {
  children: ReactNode,
}

export const ButtonIcon: FC<ButtonIconProps> = ({ children, ...restProps }) => (
  <ButtonBase
    className={s.buttonIcon}
    {...restProps}
  >
    {children}
  </ButtonBase>
);
