import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select } from '../../';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const DefaultSelectTemplate: Story = (args) => <Select {...args} />;
export const Default = DefaultSelectTemplate.bind({});

Default.args = {
  label: 'Profesi',
  options: [
    { value: 'Mahasiswa', text: 'Mahasiswa' },
    { value: 'Siswa', text: 'Siswa' },
    { value: 'Dosen', text: 'Dosen' },
  ],
};
