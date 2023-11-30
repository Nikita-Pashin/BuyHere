import { ComponentPropsWithoutRef, FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';
import s from './Wrapper.module.scss';

type WrapperTags = 'a' | 'button' | 'Link';

export type WrapperAttributes = {
  a: ComponentPropsWithoutRef<'a'>,
  button: ComponentPropsWithoutRef<'button'>,
  Link: LinkProps,
};

export type WrapperProps = {
  tag: WrapperTags;
  children: React.ReactNode;
  classNameWrapper?: string,
  nonInteractive?: boolean,
  disabled?: boolean,
  // TODO: Fix
  typeButton?: any,
};

export const Wrapper: FC<WrapperProps> = ({
  children, tag = 'button', classNameWrapper, disabled, nonInteractive, typeButton, ...restProps
}) => {
  if (tag === 'a') {
    const restPropsCopy = { ...restProps } as WrapperAttributes['a'];

    return (
      <a className={classNames(s.button, classNameWrapper)} {...restPropsCopy}>
        {children}
      </a>
    );
  }

  if (tag === 'Link') {
    const restPropsCopy = { ...restProps } as WrapperAttributes['Link'];

    return (
      <Link className={classNames(s.button, classNameWrapper)} {...restPropsCopy}>
        {children}
      </Link>
    );
  }

  const restPropsCopy = { ...restProps } as WrapperAttributes['button'];
  return (
    <button disabled={disabled} className={classNames(s.button, classNameWrapper, nonInteractive && s.nonInteractive)} type="button" {...restPropsCopy}>
      {children}
    </button>
  );
};
