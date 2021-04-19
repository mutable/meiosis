import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from './Button'
import { ButtonProps } from './Button.types'

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export default {
  component: Button,
  title: "General/Button",
  argTypes: {}
} as Meta;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary",
  type: "submit"
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Secondary",
  disabled: false,
  onClick: () => { alert('onClick!') }
};

export const Loading = Template.bind({});
Loading.args = {
  primary: true,
  label: "Click me",
  loading: true
};