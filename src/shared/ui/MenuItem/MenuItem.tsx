import { FC } from 'react';
import { Button, ButtonSquareProps } from 'shared/ui/Button';
import s from './MenuItem.module.scss';

type MenuItemProps = {
  label: string,
  href?: string,
} & Pick<ButtonSquareProps, 'invertedTheme' | 'nonInteractive' | 'leftNode' | 'rightNode' | 'onClick'>;

export const MenuItem: FC<MenuItemProps> = ({
  invertedTheme = true, href, label, nonInteractive, leftNode, rightNode, onClick,
}) => {
  if (href) {
    return (
      <Button
        typeButton="ButtonSquare"
        className={s.menuItem}
        invertedTheme={invertedTheme}
        nonInteractive={nonInteractive}
        leftNode={leftNode}
        rightNode={rightNode}
        to={href}
        tag="Link"
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
      tag="button"
    >
      {label}
    </Button>
  );
};
