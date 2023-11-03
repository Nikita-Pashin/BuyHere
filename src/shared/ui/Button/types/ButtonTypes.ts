import { Sizes } from 'shared/ui/types';
import { ButtonSquareProps } from '../ButtonSquare/ButtonSquare';
import { AnchorSquareProps } from '../AnchorSquare/AnchorSquare';
import { LinkSquareProps } from '../LinkSquare/LinkSquare';
import { ButtonIconProps } from '../ButtonIcon/ButtonIcon';

export interface CommonButtonUIProps {
  size?: Sizes,
  invertedTheme?: boolean,
  nonInteractive?: boolean,
  disabled?: boolean,
  classNameButton?: string,
}

export interface ButtonGeneralTypes {
  ButtonSquare: ButtonSquareProps;
  AnchorSquare: AnchorSquareProps;
  LinkSquare: LinkSquareProps;
  ButtonIcon: ButtonIconProps;
}
