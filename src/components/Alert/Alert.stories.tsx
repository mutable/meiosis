import React from "react";
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

