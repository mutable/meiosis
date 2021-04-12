import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon } from "./Icon";
import { IconProps, IconType } from './Icon.types'

export default {
  title: "General/Icon",
  component: Icon
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "history",
  color: "gray"
};
