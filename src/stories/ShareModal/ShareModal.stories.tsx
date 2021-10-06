import React, { useState } from 'react';
import { ShareModal, ShareModalProps, Button } from '../../';
import { Story, Meta } from '@storybook/react/types-6-0';
import { argTypes } from './argTypes';

export default {
  title: 'Components/ShareModal',
  component: ShareModal,
  argTypes: argTypes,
} as Meta;

const ShareModalExample: Story<ShareModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        buttonTheme="primary"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        Share
      </Button>
      <ShareModal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>Hello this is a (sort of) unopinionated modal</p>
      </ShareModal>
    </>
  );
};

// const DefaultShareModalTemplate: Story<ShareModalProps> = (args) => <ShareModal {...args} />;
export const Default = ShareModalExample.bind({});
Default.args = {
  size: 'md',
  target: 'compfest.id/sharemodal',
};
