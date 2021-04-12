import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconLink } from "./IconLink";
import { IconLinkProps } from './IconLink.types'
import { IconType } from "../Icon/Icon.types";

export default {
  title: "General/Icon Link",
  component: IconLink
} as Meta;

const Template: Story<IconLinkProps> = (args) => <IconLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconType: "bug",
  label: "Report an issue"
};
