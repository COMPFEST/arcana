import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Countdown, CountdownProps } from '../../';

export default {
  title: 'Components/Countdown',
  component: Countdown,
} as Meta;

const CountdownComponent: Story<CountdownProps> = (args) => (
  <Countdown {...args} />
);
export const Default = CountdownComponent.bind({});
Default.args = {
  endDate: new Date(Date.now() + 86400000),
  initDuration: 1,
  animated: true,
  title: 'Waktu Tersisa',
  digits: {
    seconds: true,
    minutes: true,
    hours: true,
    days: true,
  },
};

export const Example1 = CountdownComponent.bind({});
Example1.args = {
  endDate: new Date(Date.now() + 86400000),
  initDuration: 1,
  animated: true,
  title: 'Waktu Tersisa',
  digits: {
    seconds: true,
    minutes: true,
    hours: true,
    days: false,
  },
};

export const Example2 = CountdownComponent.bind({});
Example2.args = {
  endDate: new Date(Date.now() + 86400000),
  initDuration: 1,
  animated: false,
  title: 'Waktu Tersisa',
  digits: {
    seconds: true,
    minutes: true,
    hours: true,
    days: false,
  },
};
