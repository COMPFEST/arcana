import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps, Button } from '../../';
import LoginModal from './Examples/LoginModal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const ModalComponent: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button buttonTheme="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>Hello this is a (sort of) unopinionated modal</p>
      </Modal>
    </>
  );
};
export const Default = ModalComponent.bind({});
Default.args = {} as ModalProps;

const ExampleComponent1: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button buttonTheme="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <LoginModal {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export const Example1 = ExampleComponent1.bind({});
Example1.args = {
  size: 'sm',
} as ModalProps;

export const HideCloseButton = ExampleComponent1.bind({});
HideCloseButton.args = {
  size: 'sm',
  hideCloseButton: true,
} as ModalProps;
