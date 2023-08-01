import { FC } from 'react';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

type LoginModalProps = Omit<ModalProps, 'children'>;

export const LoginModal: FC<LoginModalProps> = ({
  isOpen, onClose, className,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={className}
  >
    <LoginForm />
  </Modal>
);
