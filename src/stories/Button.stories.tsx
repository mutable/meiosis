import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../components/Button'

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export default {
  component: Button,
  title: "Button",
  argTypes: {  }
} as Meta;

export const Primary = Template.bind({});
Primary.args = { 
  primary: true,
  label: "Primary"
};


export const Secondary = Template.bind({});
Secondary.args = { 
  primary: false,
  label: "Secondary"
};