import React from 'react';
import { Accordion, AccordionProps } from '../../';
import { Story, Meta } from '@storybook/react/types-6-0';
import { argTypes } from './argTypes';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: argTypes,
} as Meta;

const DefaultAccordionTemplate: Story<AccordionProps> = (args) => (
  <Accordion {...args} />
);
export const Default = DefaultAccordionTemplate.bind({});
Default.args = {
  items: [
    { title: 'Default title', content: 'Default accordion content' },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus suscipit, recusandae dolor perspiciatis quis debitis deleniti ex commodi repudiandae, sint molestiae quo fuga illum fugit aut. Fugit, maxime repellat?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus suscipit, recusandae dolor perspiciatis quis debitis deleniti ex commodi repudiandae, sint molestiae quo fuga illum fugit aut. Fugit, maxime repellat?',
    },
  ],
  iconSVG: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.12502 8.99953L12.005 12.8795L15.885 8.99953C16.275 8.60953 16.905 8.60953 17.295 8.99953C17.685 9.38953 17.685 10.0195 17.295 10.4095L12.705 14.9995C12.315 15.3895 11.685 15.3895 11.295 14.9995L6.70502 10.4095C6.51777 10.2227 6.41254 9.96905 6.41254 9.70453C6.41254 9.44001 6.51777 9.18636 6.70502 8.99953C7.09502 8.61953 7.73502 8.60953 8.12502 8.99953Z"
        fill="#0266D3"
      />
    </svg>
  ),
  iconMargin: '32px',
  textColor: '#000',
  bgInit: '#FFF',
  bgOpen: '#F0F7FE',
  borderColor: '#CCCCCC',
  rotateDeg: 180,
};
