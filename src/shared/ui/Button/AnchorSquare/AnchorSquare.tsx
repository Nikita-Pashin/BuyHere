import { FC } from 'react';
import { AnchorWrapper, AnchorWrapperProps } from '../AnchorWrapper/AnchorWrapper';
import { ButtonSquareUI, ButtonSquareUIProps } from '../ButtonSquareUI/ButtonSquareUI';

export type AnchorSquareProps = ButtonSquareUIProps & AnchorWrapperProps;

export const AnchorSquare: FC<AnchorSquareProps> = ({
  children, classNameButton, classNameWrapper, disabled, invertedTheme, leftNode,
  nonInteractive, rightNode, size, stretch, ...restProps
}) => (
  <AnchorWrapper classNameWrapper={classNameWrapper} {...restProps}>
    <ButtonSquareUI
      classNameButton={classNameButton}
      disabled={disabled}
      invertedTheme={invertedTheme}
      leftNode={leftNode}
      nonInteractive={nonInteractive}
      rightNode={rightNode}
      size={size}
      stretch={stretch}
    >
      {children}
    </ButtonSquareUI>
  </AnchorWrapper>
);
