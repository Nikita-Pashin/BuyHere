import { FC } from 'react';
import { Button, ButtonSquareProps } from '../Button';
import s from './MenuItem.module.scss';

type MenuItemProps = {
  label: string,
} & Pick<ButtonSquareProps, 'invertedTheme' | 'nonInteractive' | 'onClick' | 'leftNode' | 'rightNode'>;

export const MenuItem: FC<MenuItemProps> = ({
  invertedTheme = true, label, nonInteractive, leftNode, rightNode,
}) => (
  <Button
    typeButton="ButtonSquare"
    className={s.menuItem}
    invertedTheme={invertedTheme}
    nonInteractive={nonInteractive}
    leftNode={leftNode}
    rightNode={rightNode}
  >
    {label}
  </Button>
);
