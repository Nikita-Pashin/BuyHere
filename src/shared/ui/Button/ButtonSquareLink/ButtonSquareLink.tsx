import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Sizes } from 'shared/ui/types';
import s from './ButtonSquareLink.module.scss';

export type ButtonSquareLinkProps = {
  href: string,
  stretch?: boolean,
  leftNode?: ReactNode,
  rightNode?: ReactNode,
  asElementA?: boolean,
  size?: Sizes,
  className?: string,
  onClick?: (...args: any[]) => any,
  invertedTheme?: boolean,
  nonInteractive?: boolean,
};

export const ButtonSquareLink: FC<ButtonSquareLinkProps> = ({
  children, size, className, stretch, invertedTheme, href,
  nonInteractive, leftNode, rightNode, asElementA, ...otherProps
}) => {
  const Component = asElementA ? 'a' : Link;

  return (
    <Component
      to={href}
      href={href}
      className={classNames(
        s[size],
        className,
        s.buttonSquareLink,
        stretch && s.stretch,
        invertedTheme && s.invertedTheme,
        nonInteractive && s.nonInteractive,
      )}
      {...otherProps}
    >
      {leftNode && (
        <div className={s.leftNode}>{leftNode}</div>
      )}
      {children}
      {rightNode && (
        <div className={s.rightNode}>{rightNode}</div>
      )}
    </Component>
  );
};
