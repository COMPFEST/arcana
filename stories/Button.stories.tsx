import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../src/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const DefaultButtonTemplate: Story<ButtonProps> = (args) => (
  <Button buttonTheme="default" {...args} />
);
export const Default = DefaultButtonTemplate.bind({});
Default.args = {
  children: 'Default Button',
  disabled: false,
  loading: false,
};

const PrimaryButtonTemplate: Story<ButtonProps> = (args) => (
  <Button buttonTheme="primary" {...args} />
);
export const Primary = PrimaryButtonTemplate.bind({});
Primary.args = {
  children: 'Primary Button',
  disabled: false,
  loading: false,
};

const SecondaryButtonTemplate: Story<ButtonProps> = (args) => (
  <Button buttonTheme="secondary" {...args} />
);
export const Secondary = SecondaryButtonTemplate.bind({});
Secondary.args = {
  children: 'Secondary Button',
  disabled: false,
  loading: false,
};

const TertiaryButtonTemplate: Story<ButtonProps> = (args) => (
  <Button buttonTheme="tertiary" {...args} />
);
export const Tertiary = TertiaryButtonTemplate.bind({});
Tertiary.args = {
  children: 'Tertiary Button',
  disabled: false,
  loading: false,
};
