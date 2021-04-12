import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Badge } from "./Badge";
import { BadgeProps } from './Badge.types'

export default {
  title: "General/Badge",
  component: Badge,
  color: { control: 'select' },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  color: "green",
  text: "Normal"
};
