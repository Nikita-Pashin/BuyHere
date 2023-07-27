import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      {children}
    </Modal>
  );
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: '123',
} as ModalProps;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: '123',
} as ModalProps;
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
