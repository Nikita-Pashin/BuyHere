import { ComponentPropsWithoutRef, FC } from 'react';
import { Optional } from 'shared/types/commonTypes';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';

export interface ButtonWrapperProps extends Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>, Optional<WrapperProps> {}

export const ButtonWrapper: FC<ButtonWrapperProps> = ({ children, ...restProps }) => (
  <Wrapper
    tag="button"
    {...restProps}
  >
    {children}
  </Wrapper>
);
