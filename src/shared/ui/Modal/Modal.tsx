/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FC, ReactNode, useCallback, useEffect,
} from 'react';
import classNames from 'classnames';
import { Portal } from '../Portal';
import s from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  children, className, isOpen, onClose,
}) => {
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

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(s.modal, className, s.opened)}>
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
