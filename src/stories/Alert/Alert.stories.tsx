import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Alert, BaseAlertProps } from '../../';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['positive', 'neutral', 'warning', 'danger', 'glass'],
      },
    },
    iconSize: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
  },
} as Meta;

const DefaultLoaderTemplate: Story<BaseAlertProps> = (args) => (
  <Alert {...args} />
);
export const Default = DefaultLoaderTemplate.bind({});

Default.args = {
  type: 'positive',
  height: '60px',
  width: '364px',
  fontSize: '12px',
  parentBackground: '#FFFFFF',
  children:
    'Tips maksimal 2 line of text, lorem ipsum dolor sir amet conspectur elit',
  iconSize: 'md',
  noBg: false,
};
