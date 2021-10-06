import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Stats, RecordSectionProps } from '../../';

export default {
  title: 'Components/Stats/container',
  component: Stats,
  argTypes: {
    imgSize: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'base', 'lg'],
      },
    },
    textSize: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'base', 'lg'],
      },
    },
  },
} as Meta;

const Template: Story<RecordSectionProps> = (args) => <Stats {...args} />;
export const Default = Template.bind({});
Default.args = {
  imgSize: 'base',
  textSize: 'base',
};
