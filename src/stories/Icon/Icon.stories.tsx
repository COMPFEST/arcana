import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from '../../';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const DefaultIconTemplate: Story<IconProps> = (args) => (
  <Icon size="default" {...args} />
);
export const Default = DefaultIconTemplate.bind({});
Default.args = {
  src: '',
};

const SmallIconTemplate: Story<IconProps> = (args) => (
  <Icon size="small" {...args} />
);
export const Small = SmallIconTemplate.bind({});
Small.args = {
  src: '',
};

const MediumIconTemplate: Story<IconProps> = (args) => (
  <Icon size="medium" {...args} />
);
export const Medium = MediumIconTemplate.bind({});
Medium.args = {
  src: '',
};

const LargeIconTemplate: Story<IconProps> = (args) => (
  <Icon size="large" {...args} />
);
export const Large = LargeIconTemplate.bind({});
Large.args = {
  src: '',
};
