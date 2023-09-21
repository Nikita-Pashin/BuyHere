import { FC } from 'react';
import { Button, ButtonSquareProps } from 'shared/ui/Button';
import s from './MenuItem.module.scss';

type MenuItemProps = {
  label: string,
  href?: string,
} & Pick<ButtonSquareProps, 'invertedTheme' | 'nonInteractive' | 'onClick' | 'leftNode' | 'rightNode'>;

export const MenuItem: FC<MenuItemProps> = ({
  invertedTheme = true, href, label, nonInteractive, leftNode, rightNode, onClick,
}) => {
  if (href) {
    return (
      <Button
        typeButton="ButtonSquareLink"
        className={s.menuItem}
        invertedTheme={invertedTheme}
        nonInteractive={nonInteractive}
        leftNode={leftNode}
        rightNode={rightNode}
        href={href}
        onClick={onClick}
      >
        {label}
      </Button>
    );
  }

  return (
    <Button
      typeButton="ButtonSquare"
      className={s.menuItem}
      invertedTheme={invertedTheme}
      nonInteractive={nonInteractive}
      leftNode={leftNode}
      rightNode={rightNode}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
