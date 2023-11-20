import { FC, memo } from 'react';
import { getUserAvatarUrl } from 'entities/User';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import AvatarIcon from 'shared/assets/icons/avatar.svg';
import s from './Avatar.module.scss';

export interface AvatarProps {
  size?: number;
  round?: boolean,
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const {
    size = 48,
    round,
  } = props;

  const avatar_url = useSelector(getUserAvatarUrl);

  return avatar_url ? (
    <div
      style={{ height: `${size}px`, width: `${size}px` }}
      className={classNames(s.avatar, round && s.round)}
    >
      <img alt="avatar_image" src={avatar_url} />
    </div>
  ) : (
    <AvatarIcon />
  );
});
