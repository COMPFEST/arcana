import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  TestimonyView,
  TestimonyViewContainerMarginType,
  TestimonyViewContainerSpaceType,
  TestimonyViewImgSizeType,
  TestimonyViewMessageModeType,
  TestimonyViewProps,
} from '../../../';
import { dataTesti, GradientText } from '../util';

// const DefaultHeader: React.ReactNode = (
//     <div tw="flex">
//         <h3>Yang Mereka Katakan Tentang</h3>
//         <img tw="h-1 md:h-6 ml-3" src="/images/Testimony/cf-logo.svg" />
//     </div>
// );

interface ContainerProps {
  selected?: number;
  containerMargin?: TestimonyViewContainerMarginType;
  containerSpace: TestimonyViewContainerSpaceType;
  imgSize?: TestimonyViewImgSizeType;
  messageMode?: TestimonyViewMessageModeType;
}

// I must create container to enter dataTesti, otherwise error maximum call stack
const TestimonyViewContainer: React.FC<ContainerProps> = (props) => {
  return <TestimonyView testiList={dataTesti} {...props} />;
};

const DefaultTemplate: Story<ContainerProps> = (args) => (
  <TestimonyViewContainer {...args} />
);

export default {
  title: 'Components/Testimony/View',
  component: TestimonyViewContainer,
  argTypes: {
    containerMargin: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'base', 'lg'],
      },
    },
    messageMode: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'base', 'lg'],
      },
    },
    containerSpace: {
      control: {
        type: 'inline-radio',
        options: ['tight', 'base', 'sparse'],
      },
    },
    imgSize: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'base', 'lg'],
      },
    },
  },
} as Meta;

export const Default = DefaultTemplate.bind({});
Default.args = {
  selected: 0,
  containerMargin: 'base',
  containerSpace: 'base',
  imgSize: 'base',
  messageMode: 'base',
};

// export const notdef = () => (
//     <TestimonyView
//         testiList={dataTesti}
//         testimonyHeader={DefaultHeader}
//         containerSpace="base"
//         containerMargin="base"
//         selected={0}
//     />
// );
