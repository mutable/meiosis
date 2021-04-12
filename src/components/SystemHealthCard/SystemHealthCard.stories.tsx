import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { SystemHealthCard } from './SystemHealthCard'

import Icon from '../../public/icons/microchip-light.svg';
import { SystemHealthCardProps } from "./SystemHealthCard.types";

const data = require('../../mock-data/usage.json');

const Template: Story<SystemHealthCardProps> = (args) => <SystemHealthCard {...args} />;

export default {
  title: "Visualizations/System Health Card",
  component: SystemHealthCard,
  argTypes: { } 
} as Meta;

export const Default = Template.bind({});
Default.args = {
  data: data,
  title: "CPU Usage",
  icon: Icon,
  unit: "%",
  useColoredNumber: true
};
