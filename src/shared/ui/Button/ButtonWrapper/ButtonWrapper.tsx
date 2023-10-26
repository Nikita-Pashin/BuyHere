import { ComponentPropsWithoutRef, FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';
import s from './ButtonWrapper.module.scss';

type ButtonWrapperTags = 'a' | 'button' | 'Link';

export type ButtonWrapperAttributes = {
  a: ComponentPropsWithoutRef<'a'>,
  button: ComponentPropsWithoutRef<'button'>,
  Link: LinkProps,
};

export type ButtonWrapperProps = {
  tag: ButtonWrapperTags;
  children: React.ReactNode;
  className?: string,
};

export const ButtonWrapper: FC<ButtonWrapperProps> = ({
  children, tag = 'button', className, ...restProps
}) => {
  if (tag === 'a') {
    const restPropsCopy = { ...restProps } as ButtonWrapperAttributes['a'];

    return (
      <a className={classNames(s.button, className)} {...restPropsCopy}>
        {children}
      </a>
    );
  }

  if (tag === 'Link') {
    const restPropsCopy = { ...restProps } as ButtonWrapperAttributes['Link'];

    return (
      <Link className={classNames(s.button, className)} {...restPropsCopy}>
        {children}
      </Link>
    );
  }

  const restPropsCopy = { ...restProps } as ButtonWrapperAttributes['button'];
  return (
    <button className={classNames(s.button, className)} type="button" {...restPropsCopy}>
      {children}
    </button>
  );
};
