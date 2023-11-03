import { FC, MouseEventHandler } from 'react';
import { Button, ButtonGeneralTypes } from 'shared/ui/Button';
import s from './MenuItem.module.scss';

type MenuItemProps = {
  label: string,
  href?: string,
} & Pick<ButtonGeneralTypes['LinkSquare'] | ButtonGeneralTypes['ButtonSquare'], 'invertedTheme' | 'nonInteractive' | 'leftNode' | 'rightNode' | 'onClick'>;

export const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    invertedTheme = true, href, label, nonInteractive, leftNode, rightNode, onClick,
  } = props;

  if (href) {
    const onClickLinkElement = onClick as MouseEventHandler<HTMLAnchorElement>;

    return (
      <Button
        typeButton="LinkSquare"
        classNameWrapper={s.menuItem}
        invertedTheme={invertedTheme}
        nonInteractive={nonInteractive}
        leftNode={leftNode}
        rightNode={rightNode}
        to={href}
        onClick={onClickLinkElement}
      >
        {label}
      </Button>
    );
  }

  const onClickButtonElement = onClick as MouseEventHandler<HTMLButtonElement>;

  return (
    <Button
      typeButton="ButtonSquare"
      classNameWrapper={s.menuItem}
      invertedTheme={invertedTheme}
      nonInteractive={nonInteractive}
      leftNode={leftNode}
      rightNode={rightNode}
      onClick={onClickButtonElement}
    >
      {label}
    </Button>
  );
};
