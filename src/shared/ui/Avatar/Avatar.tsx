import { FC } from 'react';
import AvatarIcon from 'shared/assets/icons/avatar.svg';
import { Button } from 'shared/ui/Button';

interface AvatarProps {
  className?: string,
}

export const Avatar: FC<AvatarProps> = ({ className }) => (
  <Button
    typeButton="ButtonIcon"
    className={className}
  >
    <AvatarIcon />
  </Button>
);
