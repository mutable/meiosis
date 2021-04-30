import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card } from "./Card";
import { CardProps } from './Card.types'
import { Button } from "../Button/Button";

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
};

export const SingleLink = Template.bind({});
SingleLink.args = {
  title: "mutable-api",
  description: "2021-02-26T00:19:33Z",
  description2: "d4468358-a6de-4b9d-aa9b-5f60ea1e2cfa",
  status: {
    color: "green",
    text: "Normal"
  },
  buttons: [
    <Button iconBefore="stack" label="View namespace" />
  ]
};

export const TwoLinks = Template.bind({});
TwoLinks.args = {
  title: "mutable-api",
  description: "2021-02-26T00:19:33Z",
  description2: "d4468358-a6de-4b9d-aa9b-5f60ea1e2cfa",
  status: {
    color: "orange",
    text: "Warning"
  },
  buttons: [
    <Button iconBefore="stack" label="View namespace" />,
    <Button iconBefore="bug" label="Report an issue" />
  ]
};