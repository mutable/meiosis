import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card } from "./Card";
import { CardProps } from './Card.types'

export default {
  title: "General/Card",
  component: Card
} as Meta;

const Template: Story<CardProps> = (args) =>
  <div className='w-96'>
    <Card {...args} />
  </div>;

export const Basic = Template.bind({});
Basic.args = {
  title: "Mutable Login",
  description: "Authentication & Account Settings Portal",
  action: "Report an issue",
  href: "/#"
};

export const MoreProps = Template.bind({});
MoreProps.args = {
  title: "mutable-api",
  description: "2021-02-26T00:19:33Z",
  description2: "d4468358-a6de-4b9d-aa9b-5f60ea1e2cfa",
  action: "View namespace",
  status: {
    color: "green", 
    text: "Normal"
  },
  href: "/#"
};