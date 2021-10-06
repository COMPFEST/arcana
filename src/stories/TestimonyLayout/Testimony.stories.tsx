import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TestimonyLayout, TestimonyStoriesProps } from '../../';
import { dataTesti, GradientText } from './util';

const TestimonyLayoutContainer: React.FC<TestimonyStoriesProps> = (props) => (
  <TestimonyLayout testiList={dataTesti} {...props} />
);

export default {
  title: 'Components/TestimonyLayout',
  component: TestimonyLayoutContainer,
  argTypes: {
    viewContainerMargin: {
      control: { type: 'inline-radio', options: ['sm', 'base', 'lg'] },
    },
    viewContainerSpace: {
      control: { type: 'inline-radio', options: ['tight', 'base', 'sparse'] },
    },
    viewImgSize: {
      control: { type: 'inline-radio', options: ['sm', 'base', 'lg'] },
    },
    viewMessageMode: {
      control: { type: 'inline-radio', options: ['sm', 'base', 'lg'] },
    },
    controllerImgContainer: {
      control: { type: 'inline-radio', options: ['sm', 'base', 'lg'] },
    },
    controllerImgBorder: {
      control: { type: 'inline-radio', options: ['full', 'none', 'lg'] },
    },
  },
} as Meta;

const DefaultTemplate: Story<TestimonyStoriesProps> = (args) => (
  <TestimonyLayoutContainer {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  viewContainerMargin: 'base',
  viewContainerSpace: 'base',
  viewImgSize: 'base',
  viewMessageMode: 'base',
  controllerImgContainer: 'base',
  controllerImgBorder: 'full',
  controllerImgHeight: '100%',
  controllerImgWidth: '100%',
};
// export const defaultTestimony = () => <TestimonyLayout testiList={dataTesti} />;
