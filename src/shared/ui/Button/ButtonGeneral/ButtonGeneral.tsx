import classNames from 'classnames';
import { CommonButtonProps } from '../types/CommonButtonProps';
import { ButtonSquare, ButtonSquareProps } from '../ButtonSquare/ButtonSquare';
import s from './ButtonGeneral.module.scss';
import { ButtonIcon, ButtonIconProps } from '../ButtonIcon/ButtonIcon';
import { ButtonSquareLink, ButtonSquareLinkProps } from '../ButtonSquareLink/ButtonSquareLink';

type ButtonGeneralTypes = 'ButtonSquare' | 'ButtonSquareLink' | 'ButtonIcon';

type ButtonGeneralTypeProps = {
  ButtonIcon: ButtonIconProps,
  ButtonSquare: ButtonSquareProps,
  ButtonSquareLink: ButtonSquareLinkProps,
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

  if (typeButton === 'ButtonSquareLink' && Object.hasOwn(necessaryProps, 'href')) {
    const buttonSquareLinkProps = necessaryProps as unknown as ButtonGeneralProps<'ButtonSquareLink'>;

    return (
      <ButtonSquareLink
        href={buttonSquareLinkProps.href}
        {...buttonSquareLinkProps}
      >
        {children}
      </ButtonSquareLink>
    );
  }

  if (typeButton === 'ButtonIcon') {
    return (
      <ButtonIcon
        {...necessaryProps}
      >
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
