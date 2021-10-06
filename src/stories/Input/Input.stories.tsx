import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, BaseInputProps } from '../../';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'radio',
        options: ['text', 'date'],
      },
    },
  },
} as Meta;

const DefaultLoaderTemplate: Story<BaseInputProps> = (args) => (
  <Input {...args} />
);
export const Default = DefaultLoaderTemplate.bind({});

Default.args = {
  height: '48px',
  width: '364px',
  fontSize: '16px',
  parentBackground: '#FFFFFF',
  border: '1px solid #999999',
  borderColor: '#999999',
  borderRadius: '8px',
  bg: '#FFFFFF',
};
