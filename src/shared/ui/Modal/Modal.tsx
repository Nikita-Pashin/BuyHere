/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FC, ReactNode, useCallback, useEffect,
} from 'react';
import classNames from 'classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useIsMounted } from 'shared/hooks/useIsMounted';
import { Portal } from '../Portal';
import s from './Modal.module.scss';

export interface ModalProps {
  isOpen: boolean,
  children: ReactNode,
  onClose: () => void,
  className?: string,
  lazy?: boolean,
}

export const Modal: FC<ModalProps> = ({
  children, className, isOpen, lazy, onClose,
}) => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(s.modal, className, s.opened, theme)}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={s.overlay} onClick={onClose}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            className={s.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
