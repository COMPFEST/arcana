import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Timeline, TimelineProps } from '../../';

import { defaultGradient, flatBackground } from './storyStyles';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {
    ringColor: {
      control: { type: 'color' },
    },
  },
} as Meta;

const defaultItems = [
  {
    id: 'ITEM-0',
    title: 'Pembukaan Pendaftaran',
    date: '20 Juni 2021',
    startAt: new Date('6/20/2021'),
    endAt: new Date('7/14/2021'),
  },
  {
    id: 'ITEM-1',
    title: 'Penutupan Pendaftaran',
    date: ['SEA: 14 Juli 2021', 'DSA,UXA,SUA: 18 Juli 2021'],
    startAt: new Date('7/14/2021'),
    endAt: new Date('7/19/2021'),
  },
  {
    id: 'ITEM-2',
    title: 'Pengumuman Peserta',
    date: ['SUA & SEA: 26 Juli 2021', 'DSA & UXA: 09 Agustus 2021'],
    startAt: new Date('7/26/2021'),
    endAt: new Date('8/02/2021'),
  },
];

const TimelineComponent: Story<TimelineProps> = (args) => (
  <Timeline {...args} />
);
export const Default = TimelineComponent.bind({});
Default.args = {
  title: 'Timeline',
  subtitle: 'Timeline ini untuk keseluruhan acara Academy.',
  items: defaultItems,
  gradient: defaultGradient,
  ringColor: '#A125FF',
};

export const SolidColorExample = TimelineComponent.bind({});
SolidColorExample.args = {
  title: 'Flat Color',
  subtitle: 'Timeline with flat color instead of gradient',
  items: defaultItems,
  gradient: flatBackground,
  ringColor: '#A125FF',
};
