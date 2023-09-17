import { FC } from 'react';
import IconWrapper from 'shared/lib/components/IconWrapper/IconWrapper';

type IconSearchProps = {
  [key: string]: any,
};

export const IconSearch: FC<IconSearchProps> = (props) => (
  <IconWrapper {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path d="M21 3C11.6 3 4 10.6 4 20a16.99 16.99 0 0 0 26.1 14.34l12.27 12.28 4.26-4.24-12.13-12.1A16.99 16.99 0 0 0 21 3Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z" />
    </svg>
  </IconWrapper>
);
