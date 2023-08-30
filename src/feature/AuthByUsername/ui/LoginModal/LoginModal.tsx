import { FC, Suspense } from 'react';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

type LoginModalProps = Omit<ModalProps, 'children'>;

export const LoginModal: FC<LoginModalProps> = ({
  isOpen, onClose, className,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={className}
  >
    <Suspense fallback="Loading...">
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
