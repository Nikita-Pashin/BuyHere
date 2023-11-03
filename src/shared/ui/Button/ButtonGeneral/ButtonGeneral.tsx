import { FC } from 'react';
import { ButtonSquare, ButtonSquareProps } from '../ButtonSquare/ButtonSquare';
import { CommonButtonUIProps } from '../types/ButtonTypes';
import { ButtonIcon, ButtonIconProps } from '../ButtonIcon/ButtonIcon';
import { AnchorSquare, AnchorSquareProps } from '../AnchorSquare/AnchorSquare';
import { LinkSquare, LinkSquareProps } from '../LinkSquare/LinkSquare';

interface GeneralButtonSquare extends ButtonSquareProps {
  typeButton: 'ButtonSquare';
}

interface GeneralAnchorSquare extends AnchorSquareProps {
  typeButton: 'AnchorSquare';
}

interface GeneralLinkSquare extends LinkSquareProps {
  typeButton: 'LinkSquare';
}

interface GeneralButtonIcon extends ButtonIconProps {
  typeButton: 'ButtonIcon';
}

export type ButtonGeneralProps =
  GeneralButtonSquare | GeneralAnchorSquare | GeneralLinkSquare | GeneralButtonIcon;

export const ButtonGeneral: FC<ButtonGeneralProps> = (props) => {
  const nessaryProps: CommonButtonUIProps = {
    size: 'm',
  };

  const {
    children,
  } = props;

  switch (props.typeButton) {
    case 'ButtonSquare':
      return (
        <ButtonSquare {...props} {...nessaryProps}>
          {children}
        </ButtonSquare>
      );

    case 'AnchorSquare':
      return (
        <AnchorSquare {...props} {...nessaryProps}>
          {children}
        </AnchorSquare>
      );

    case 'LinkSquare':
      return (
        <LinkSquare {...props} {...nessaryProps}>
          {children}
        </LinkSquare>
      );

    case 'ButtonIcon':
      return (
        <ButtonIcon {...props} {...nessaryProps}>
          {children}
        </ButtonIcon>
      );

      // case 'AnchorIcon':
      //   return (
      //     <div>AnchorIcon</div>
      //   );

      // case 'LinkIcon':
      //   return (
      //     <div>LinkIcon</div>
      //   );

    default:
      return null;
  }
};
