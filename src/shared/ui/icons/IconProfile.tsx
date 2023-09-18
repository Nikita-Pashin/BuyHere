import { FC } from 'react';
import IconWrapper from 'shared/lib/components/IconWrapper/IconWrapper';

type IconProfileProps = {
  [key: string]: any,
};

export const IconProfile: FC<IconProfileProps> = (props) => (
  <IconWrapper {...props}>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6.5 8C4 8 2 10 2 12.5v.5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-.5C14 10 12 8 9.5 8zm0 0" />
    </svg>
  </IconWrapper>
);
