import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import s from './ButtonSquareUI.module.scss';
import { CommonButtonUIProps } from '../types/ButtonTypes';

export type ButtonSquareUIProps = {
  stretch?: boolean,
  leftNode?: ReactNode,
  rightNode?: ReactNode,
} & CommonButtonUIProps;

export const ButtonSquareUI: FC<ButtonSquareUIProps> = ({
  children, size, classNameButton, stretch, invertedTheme,
  nonInteractive, leftNode, rightNode, ...otherProps
}) => (
  <div
    className={classNames(
      s[size],
      classNameButton,
      s.buttonSquareUI,
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
  </div>
);
