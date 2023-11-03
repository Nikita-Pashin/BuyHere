import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';

export interface ButtonWrapperProps extends Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  children: ReactNode;
  classNameWrapper?: string;
}

export const ButtonWrapper: FC<ButtonWrapperProps> = ({ children, ...restProps }) => (
  <Wrapper
    tag="button"
    {...restProps}
  >
    {children}
  </Wrapper>
);
