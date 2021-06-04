import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Alert } from "./Alert";
import { AlertProps } from './Alert.types'

export default {
  title: "Overlays/Alert",
  component: Alert
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "success",
  message: "This is a sample message"
};

export const WithX = Template.bind({});
WithX.args = {
  type: "success",
  message: "This is a sample message",
  showX: true
};

export const WithTimeout = Template.bind({});
WithTimeout.args = {
  type: "success",
  message: "This is a sample message",
  timeout: 3000
};
