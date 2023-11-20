import { FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import s from './ButtonSquareUI.module.scss';
import { CommonButtonUIProps } from '../types/ButtonTypes';

export type ButtonSquareUIProps = {
  stretch?: boolean,
  leftNode?: ReactNode,
  rightNode?: ReactNode,
  isLoading?: boolean,
} & CommonButtonUIProps;

export const ButtonSquareUI: FC<ButtonSquareUIProps> = ({
  children, size, classNameButton, stretch, invertedTheme,
  nonInteractive, leftNode, rightNode, isLoading, ...otherProps
}) => {
  const Content = useMemo(() => {
    if (isLoading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <>
        {leftNode && (
        <div className={s.leftNode}>{leftNode}</div>
        )}
        {children}
        {rightNode && (
          <div className={s.rightNode}>{rightNode}</div>
        )}
      </>
    );
  }, [children, isLoading, leftNode, rightNode]);

  return (
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
      {Content}
    </div>
  );
};
