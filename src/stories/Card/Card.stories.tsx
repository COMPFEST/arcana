import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from '../../';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    size: {
      options: ['default', 'full'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const DesktopCardTemplate: Story<CardProps> = (args) => <Card {...args} />;
export const Desktop = DesktopCardTemplate.bind({});
Desktop.args = {
  title: 'Default Title',
  children: 'Card for Desktop View',
  isMobile: false,
  size: 'default',
};

const MobileCardTemplate: Story<CardProps> = (args) => <Card {...args} />;
export const Mobile = MobileCardTemplate.bind({});
Mobile.args = {
  title: 'Default Title',
  children: 'Card for Mobile View',
  isMobile: true,
  size: 'default',
};
