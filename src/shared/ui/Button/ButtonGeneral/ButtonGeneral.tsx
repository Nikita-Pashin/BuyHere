import classNames from 'classnames';
import { ButtonSquare, ButtonSquareProps } from '../ButtonSquare/ButtonSquare';
import s from './ButtonGeneral.module.scss';
import { ButtonIcon, ButtonIconProps } from '../ButtonIcon/ButtonIcon';
import { ButtonWrapper, ButtonWrapperAttributes, ButtonWrapperProps } from '../ButtonWrapper/ButtonWrapper';

type ButtonGeneralTypes = 'ButtonSquare' | 'ButtonIcon';

type ButtonGeneralTypeProps = {
  ButtonIcon: ButtonIconProps,
  ButtonSquare: ButtonSquareProps,
};

export type ButtonGeneralProps<T extends ButtonGeneralTypes, K extends ButtonWrapperProps['tag']> = {
  typeButton: T,
  tag: K
} & ButtonGeneralTypeProps[T] & ButtonWrapperAttributes[K];

export const ButtonGeneral = <T extends ButtonGeneralTypes, K extends ButtonWrapperProps['tag']>({
  typeButton, className, children, disabled, onClick, size = 'm', tag, ...otherProps
}: ButtonGeneralProps<T, K>) => {
  const necessaryProps = {
    size,
    type: 'button',
    className: '',
    disabled,
    ...otherProps,
  };

  const buttonWrapperProps = { ...otherProps };

  if (typeButton === 'ButtonIcon') {
    return (
      <ButtonWrapper
        tag={tag}
        {...buttonWrapperProps}
      >
        <ButtonIcon {...necessaryProps}>
          {children}
        </ButtonIcon>
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper
      tag={tag}
      onClick={onClick}
      className={classNames(className, disabled && s.disabled)}
      {...buttonWrapperProps}
    >
      <ButtonSquare {...necessaryProps}>
        {children}
      </ButtonSquare>
    </ButtonWrapper>
  );
};
