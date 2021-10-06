import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatCard, StatCardProps } from '../../../';

export default {
  title: 'Components/Stats/StatCard',
  component: StatCard,
  argtypes: {
    mode: {
      control: {
        type: 'inline-radio',
        options: ['mobile', 'desktop'],
      },
    },
  },
} as Meta;

const Template: Story<StatCardProps> = (args) => <StatCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  mode: 'desktop',
  isStatic: false,
  inView: true,
  data: {
    figures: 8500,
    title: 'PENGUNJUNG',
    suffix: '+',
  },
  img: {
    imgSrc: '/images/stats/pengunjung.svg',
    imgAlt: 'pengunjung',
  },
  imgSize: 'base',
  textSize: 'base',
};
