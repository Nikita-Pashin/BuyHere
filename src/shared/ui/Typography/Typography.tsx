import { FC } from 'react';
import classNames from 'classnames';
import s from './Typography.module.scss';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

interface TypographyConstructorProps {
  variant: Variants,
  as?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  bold?: boolean,
  className?: string,
}

type TypographyProps = Omit<TypographyConstructorProps, 'variant'>;

const Typography: FC<TypographyConstructorProps> = ({
  variant, children, bold, as = 'span', className, ...restProps
}) => {
  const Component = as;

  return (
    <Component
      className={classNames(s[variant], bold && s.bold, className && className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export const TextXS: FC<TypographyProps> = ({
  children, ...restProps
}) => (
  <Typography
    variant="xs"
    {...restProps}
  >
    {children}
  </Typography>
);

export const TextS: FC<TypographyProps> = ({
  children, ...restProps
}) => (
  <Typography
    variant="s"
    {...restProps}
  >
    {children}
  </Typography>
);

export const TextM: FC<TypographyProps> = ({
  children, ...restProps
}) => (
  <Typography
    variant="m"
    {...restProps}
  >
    {children}
  </Typography>
);

export const TextL: FC<TypographyProps> = ({
  children, ...restProps
}) => (
  <Typography
    variant="l"
    {...restProps}
  >
    {children}
  </Typography>
);

export const TextXL: FC<TypographyProps> = ({
  children, ...restProps
}) => (
  <Typography
    variant="xl"
    {...restProps}
  >
    {children}
  </Typography>
);

export const TextXXL: FC<TypographyProps> = ({
  children, ...restProps
}) => (
  <Typography
    variant="xxl"
    {...restProps}
  >
    {children}
  </Typography>
);

export const TextXXXL: FC<TypographyProps> = ({
  children, ...restProps
}) => (
  <Typography
    variant="xxxl"
    {...restProps}
  >
    {children}
  </Typography>
);
