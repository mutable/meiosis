import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { AreaChart } from './AreaChart'
import { AreaChartProps } from './AreaChart.types'

const data = require('../../mock-data/usage.json');

const Template: Story<AreaChartProps> = (args) => <AreaChart {...args} />;

const TemplateResponsive: Story<AreaChartProps> = ({ width, height, ...rest }) =>
  <div className='h-screen w-full'>
    <ParentSize>{(parent) =>
      <AreaChart width={parent.width} height={parent.height} {...rest} />
    }</ParentSize>
  </div>;

export default {
  title: "Area Chart",
  component: AreaChart,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  data: data,
  unit: "%",
  width: 500,
  height: 150
};

export const Responsive = TemplateResponsive.bind({});
Responsive.args = {
  data: data,
  unit: "%",
};
