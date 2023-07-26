import { FC } from 'react';
import classNames from 'classnames';
import s from './Container.module.scss';

interface ContainerProps {
  className?: string,
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={classNames(s.container, className)}>
    {children}
  </div>
);
