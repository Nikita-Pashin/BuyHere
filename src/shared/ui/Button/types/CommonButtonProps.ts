import { ButtonHTMLAttributes } from 'react';
import { Sizes } from 'shared/ui/types';

export interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Sizes,
  onClick: (...args: any[]) => any,
}
