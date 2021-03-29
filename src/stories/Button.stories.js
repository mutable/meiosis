import React from "react";
import Button from '../components/Button'

const Template = (args) => <Button {...args} />;

export default {
  component: Button,
  title: "Button",
};

export const Primary = Template.bind({});
Primary.args = { 
  type: "primary",
  children: "Primary" 
};


export const Secondary = Template.bind({});
Secondary.args = { 
  type: "secondary",
  children: "Secondary"
};