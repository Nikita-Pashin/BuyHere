import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {};

export const AppLink: FC<AppLinkProps> = (props) => (
  <Link {...props} className={s.appLink}>
    {props.children}
  </Link>
);
