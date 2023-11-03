import { FC, ReactNode } from 'react';
import { ButtonWrapper, ButtonWrapperProps } from '../ButtonWrapper/ButtonWrapper';
import { ButtonIconUI, ButtonIconUIProps } from '../ButtonIconUI/ButtonIconUI';

export interface ButtonIconProps extends ButtonIconUIProps, ButtonWrapperProps {
  children: ReactNode;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  children, classNameButton, classNameWrapper, disabled,
  invertedTheme, nonInteractive, round, size, ...restProps
}) => (
  <ButtonWrapper classNameWrapper={classNameWrapper} {...restProps}>
    <ButtonIconUI
      classNameButton={classNameButton}
      disabled={disabled}
      invertedTheme={invertedTheme}
      nonInteractive={nonInteractive}
      round={round}
      size={size}
    >
      {children}
    </ButtonIconUI>
  </ButtonWrapper>
);
