import { FC } from 'react';
import { ButtonSquareUI, ButtonSquareUIProps } from '../ButtonSquareUI/ButtonSquareUI';
import { LinkWrapper, LinkWrapperProps } from '../LinkWrapper/LinkWrapper';

export type LinkSquareProps = ButtonSquareUIProps & LinkWrapperProps;

export const LinkSquare: FC<LinkSquareProps> = ({
  children, classNameButton, disabled, invertedTheme, leftNode,
  nonInteractive, rightNode, size, stretch, ...restProps
}) => (
  <LinkWrapper {...restProps}>
    <ButtonSquareUI
      classNameButton={classNameButton}
      invertedTheme={invertedTheme}
      leftNode={leftNode}
      nonInteractive={nonInteractive}
      rightNode={rightNode}
      size={size}
      stretch={stretch}
    >
      {children}
    </ButtonSquareUI>
  </LinkWrapper>
);
