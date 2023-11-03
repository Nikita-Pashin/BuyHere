import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';

export interface AnchorWrapperProps extends Omit<ComponentPropsWithoutRef<'a'>, 'className'> {
  children: ReactNode;
  classNameWrapper?: string;
}

export const AnchorWrapper: FC<AnchorWrapperProps> = ({ children, ...restProps }) => (
  <Wrapper
    tag="a"
    {...restProps}
  >
    {children}
  </Wrapper>
);
