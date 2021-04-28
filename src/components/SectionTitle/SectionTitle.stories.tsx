import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { SectionTitle } from "./SectionTitle";
import { SectionTitleProps } from './SectionTitle.types'

export default {
  title: "General/SectionTitle",
  component: SectionTitle
} as Meta;

const Template: Story<SectionTitleProps> = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Servers using Mutable OS",
  subtitle: "Optional subtitle here"
};
