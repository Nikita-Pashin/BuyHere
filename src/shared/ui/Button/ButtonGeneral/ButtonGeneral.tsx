import classNames from 'classnames';
import { CommonButtonProps } from '../types/CommonButtonProps';
import { ButtonSquare, ButtonSquareProps } from '../ButtonSquare/ButtonSquare';
import s from './ButtonGeneral.module.scss';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

type ButtonGeneralTypes = 'ButtonSquare' | 'ButtonIcon';

type ButtonGeneralTypeProps = {
  ButtonIcon: {
    lol: string,
  },
  ButtonSquare: ButtonSquareProps,
};

export type ButtonGeneralProps<T extends ButtonGeneralTypes> = {
  className?: string;
  typeButton: T,
} & ButtonGeneralTypeProps[T] & CommonButtonProps;

export const ButtonGeneral = <T extends ButtonGeneralTypes>({
  typeButton, className, children, disabled, size = 'm', ...otherProps
}: ButtonGeneralProps<T>) => {
  const necessaryProps = {
    size,
    type: 'button',
    className: classNames(className, s.generalButton, disabled && s.disabled),
    disabled,
    ...otherProps,
  };

  if (typeButton === 'ButtonIcon') {
    return (
      <ButtonIcon>
        {children}
      </ButtonIcon>
    );
  }

  return (
    <ButtonSquare
      {...necessaryProps}
    >
      {children}
    </ButtonSquare>
  );
};
