import { Sizes } from 'shared/ui/types';
import { ButtonGeneralProps } from '../ButtonGeneral/ButtonGeneral';

export interface CommonButtonUIProps {
  size?: Sizes,
  invertedTheme?: boolean,
  nonInteractive?: boolean,
  disabled?: boolean,
  className?: string,
}

export type ButtonSquareProps = ButtonGeneralProps<'ButtonSquare', 'button'>;
