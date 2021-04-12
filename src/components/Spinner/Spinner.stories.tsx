import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Spinner } from "./Spinner";
import { SpinnerProps } from './Spinner.types'

export default {
  title: "Visualizations/Spinner",
  component: Spinner
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
