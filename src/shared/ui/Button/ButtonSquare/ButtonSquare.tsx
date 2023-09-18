import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import s from './ButtonSquare.module.scss';
import { CommonButtonProps } from '../types/CommonButtonProps';

export type ButtonSquareProps = {
  stretch?: boolean,
  leftNode?: ReactNode,
  rightNode?: ReactNode,
} & CommonButtonProps;

export const ButtonSquare: FC<ButtonSquareProps> = ({
  children, size, className, stretch, invertedTheme,
  nonInteractive, leftNode, rightNode, ...otherProps
}) => (
  <button
    type="button"
    className={classNames(
      s[size],
      className,
      s.buttonSquare,
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
  </button>
);
