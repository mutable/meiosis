import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select } from "./Select";
import { SelectProps, SelectValue } from './Select.types'

export default {
  title: "General/Select",
  component: Select
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

const countries: SelectValue[] = [
  { id: 1, value: 'Sweden' },
  { id: 2, value: 'Finland' },
  { id: 3, value: 'Norway' },
  { id: 4, value: 'Denmark' },
  { id: 5, value: 'Estonia' }
]

export const Default = Template.bind({});
Default.args = {
  options: countries
};

