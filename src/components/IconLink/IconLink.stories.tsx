import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconLink } from "./IconLink";
import { IconLinkProps } from './IconLink.types'
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "General/Icon Link",
  component: IconLink
} as Meta;

const Template: Story<IconLinkProps> = (args) => (
  <Router>
    <IconLink {...args} />
  </Router>);

export const Default = Template.bind({});
Default.args = {
  iconType: "bug",
  label: "Report an issue"
};
