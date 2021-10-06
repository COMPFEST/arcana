import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Calendar, MyCalendarProps } from '../../';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    data: [
      {
        id: 'number',
        name: 'string',
        event_start: 'string',
      },
    ],
  },
} as Meta;

const DefaultCalendarTemplate: Story<MyCalendarProps> = (args) => (
  <Calendar {...args} />
);
export const Default = DefaultCalendarTemplate.bind({});
Default.args = {
  data: [
    {
      id: 1,
      name: 'belajar',
      event_start: '2021-08-20',
    },
  ],
};
