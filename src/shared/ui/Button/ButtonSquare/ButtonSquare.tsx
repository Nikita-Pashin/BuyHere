import { FC } from 'react';
import { ButtonSquareUI, ButtonSquareUIProps } from '../ButtonSquareUI/ButtonSquareUI';
import { ButtonWrapper, ButtonWrapperProps } from '../ButtonWrapper/ButtonWrapper';

export type ButtonSquareProps = ButtonWrapperProps & ButtonSquareUIProps;

export const ButtonSquare: FC<ButtonSquareProps> = ({
  children,
  classNameButton,
  classNameWrapper,
  disabled,
  invertedTheme,
  leftNode,
  nonInteractive,
  rightNode,
  size,
  stretch,
  ...restProps
}) => (
  <ButtonWrapper classNameWrapper={classNameWrapper} disabled={disabled} {...restProps}>
    <ButtonSquareUI
      disabled={disabled}
      invertedTheme={invertedTheme}
      leftNode={leftNode}
      nonInteractive={nonInteractive}
      rightNode={rightNode}
      size={size}
      stretch={stretch}
      classNameButton={classNameButton}
    >
      {children}
    </ButtonSquareUI>
  </ButtonWrapper>
);
