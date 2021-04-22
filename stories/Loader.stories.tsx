import React from 'react';
import { Story, Meta } from '@storybook/react';

import Loader, { BaseLoaderProps } from '../src/components/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['spinner'],
      },
    },
    color: {
      control: {
        type: 'radio',
        options: ['black', 'white', 'light-blue', 'blue'],
      },
    },
    speed: {
      control: {
        type: 'radio',
        options: ['slow', 'medium', 'fast'],
      },
    },
  },
} as Meta;

const DefaultLoaderTemplate: Story<BaseLoaderProps> = (args) => (
  <Loader {...args} />
);
export const Default = DefaultLoaderTemplate.bind({});
Default.args = {
  visible: true,
  color: 'black',
  speed: 'slow',
  type: 'spinner',
  height: '80px',
  width: '80px',
  parentBackground: '#FFFFFF',
  timeout: 0,
};
