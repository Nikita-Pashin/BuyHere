import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import { Wrapper } from '../Wrapper/Wrapper';

export interface LinkWrapperProps extends Omit<LinkProps, 'className'> {
  classNameWrapper?: string;
}

export const LinkWrapper: FC<LinkWrapperProps> = ({ children, ...restProps }) => (
  <Wrapper
    tag="Link"
    {...restProps}
  >
    {children}
  </Wrapper>
);
