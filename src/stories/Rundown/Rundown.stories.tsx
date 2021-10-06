import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Rundown, RundownProps } from '../../';
import { argstype } from './argtypes';

export default {
  title: 'Components/Rundown',
  component: Rundown,
  argTypes: argstype,
} as Meta;

const DefaultRundownTemplate: Story<RundownProps> = (args) => (
  <Rundown {...args} />
);
export const Default = DefaultRundownTemplate.bind({});
Default.args = {
  dataRundown: [
    { event: 'Registrasi Peserta', timeStart: '12.45', timeEnd: '13.00' },
  ],
  backgroundColor: 'default',
  timeBgColor: '#7033f3',
  timeColor: 'white',
  timeFormat: 'WIB',
  imgName: 'clock.svg',
};
