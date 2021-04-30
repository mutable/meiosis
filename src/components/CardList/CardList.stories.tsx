import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardList } from "./CardList";
import { CardListProps } from './CardList.types'
import { Button } from "../Button/Button";

export default {
  title: "Visualizations/Card List",
  component: CardList
} as Meta;

const Template: Story<CardListProps> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "mutable-api",
      description: "2021-02-26T00:19:33Z",
      description2: "d4468358-a6de-4b9d-aa9b-5f60ea1e2cfa",
      action: "View namespace",
      status: {
        color: "green",
        text: "Normal"
      },
      buttons: [
        <Button iconBefore="stack" label="View namespace" />
      ]
    },
    {
      title: "some-other-api",
      description: "2021-02-26T00:19:33Z",
      description2: "5f60ea1e2cfa-d4468358-a6de-4b9d-aa9b",
      action: "View namespace",
      status: {
        color: "orange",
        text: "Warning"
      },
      buttons: [
        <Button iconBefore="stack" label="View namespace" />
      ]
    },
    {
      title: "third-api",
      description: "2021-02-26T00:19:33Z",
      description2: "5f60ea1e2cfa-d4468358-a6de-4b9d-aa9b",
      status: {
        color: "red",
        text: "Error"
      },
      buttons: [
        <Button iconBefore="stack" label="View namespace" />
      ]
    }
  ]
};
