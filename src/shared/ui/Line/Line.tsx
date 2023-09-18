import { FC } from 'react';
import classNames from 'classnames';
import { ComponentWithClassNameProp } from 'shared/types/commonTypes';
import s from './Line.module.scss';

type LineProps = ComponentWithClassNameProp;

export const Line: FC<LineProps> = ({ className }) => (
  <div className={classNames(className, s.line)} />
);
