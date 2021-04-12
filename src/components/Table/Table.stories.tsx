import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Table } from './Table'
import { TableProps } from './Table.types'

const Template: Story<TableProps> = (args) => <Table {...args} />;

export default {
  component: Table,
  title: "Visualizations/Table",
  argTypes: {}
} as Meta;

const columns = ['Name', 'Status', 'Created', 'Containers', 'Pod IP'];
const rows = [
  { Name: "mutable-api", Status: "Running", Created: "2021-04-01T03:10:35Z", Containers: "2", PodIP: "10.0.0.5" },
  { Name: "loki-promtail", Status: "Running", Created: "2021-02-01T03:10:35Z", Containers: "1", PodIP: "10.0.1.3" },
  { Name: "loki-prometheus-server", Status: "Running", Created: "2021-01-01T03:10:35Z", Containers: "1", PodIP: "10.0.0.7" }]

export const Default = Template.bind({});
Default.args = {
  columns: columns,
  rows: rows
};
