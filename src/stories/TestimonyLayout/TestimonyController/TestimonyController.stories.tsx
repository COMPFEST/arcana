import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  TestimonyController,
  TestimonyControllerImgBorderType,
  TestimonyControllerImgContainerType,
} from '../../../';
import { onSelected } from '../Style';
import { GradientText, dataTesti } from '../util';
import { Testimony } from '../../../';

interface TestProps {
  imgHeight?: string;
  imgWidth?: string;
  imgContainer?: TestimonyControllerImgContainerType;
  imgBorder: TestimonyControllerImgBorderType;
}

const TestimonyControllerContainer: React.FC<TestProps> = (props) => {
  const [selected, setSelected] = useState<number>(0);
  console.log(props);
  return (
    <TestimonyController
      testiList={dataTesti}
      onSelected={onSelected}
      selected={selected}
      selector={setSelected}
      {...props}
    />
  );
};

export default {
  title: 'Components/Testimony/Controller',
  component: TestimonyControllerContainer,
  argTypes: {
    imgContainer: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'base', 'lg'],
      },
    },
    imgBorder: {
      control: {
        type: 'inline-radio',
        options: ['full', 'none', 'xl'],
      },
    },
  },
} as Meta;

const Template: Story<TestProps> = (args) => (
  <TestimonyControllerContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imgHeight: '100%',
  imgWidth: '100%',
  imgContainer: 'base',
  imgBorder: 'full',
};
