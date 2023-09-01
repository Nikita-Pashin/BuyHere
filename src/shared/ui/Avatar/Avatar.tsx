import { FC } from 'react';
import classNames from 'classnames';
import AvatarIcon from 'shared/assets/icons/avatar.svg';
import s from './Avatar.module.scss';

interface AvatarProps {
  className?: string,
}

export const Avatar: FC<AvatarProps> = ({ className }) => (
  <div className={classNames(s.avatar, className)}>
    <AvatarIcon />
  </div>
);
