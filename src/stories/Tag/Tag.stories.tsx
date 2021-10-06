import React from 'react';
import { Tag, TagButtonProps } from '../../';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactComponent as Docs } from './asset/docs.svg';
import { ReactComponent as Rupiah } from './asset/rupiah.svg';
import { ReactComponent as Browser } from './asset/browser.svg';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    iconSize: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'base', 'lg', 'xl'],
      },
    },
    textSize: {
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'base'],
      },
    },
    buttonMode: {
      control: {
        type: 'inline-radio',
        options: ['warning', 'neutral', 'primary', 'secondary'],
      },
    },
    icon: {
      control: {
        type: 'inline-radio',
        options: ['Docs', 'Rupiah', 'Browser'],
      },
    },
  },
} as Meta;

const Template: Story<TagButtonProps> = ({ icon, ...args }) => {
  // this switch statement only used for demonstration
  let svg = null;
  switch (icon) {
    case 'Docs':
      svg = Docs;
      break;
    case 'Rupiah':
      svg = Rupiah;
      break;
    case 'Browser':
      svg = Browser;
      break;
    default:
      svg = Docs;
  }
  return <Tag icon={svg} {...args} />;
};
export const Default = Template.bind({});

Default.args = {
  icon: 'Docs',
  text: 'Sertifikat untuk Peserta',
  iconSize: 'base',
  textSize: 'xs',
  buttonMode: 'neutral',
};
