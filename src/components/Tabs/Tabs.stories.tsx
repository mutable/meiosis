import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tabs } from "./Tabs";
import { TabsProps } from './Tabs.types'
import { Table } from "../Table/Table";

export default {
  title: "Visualizations/Tabs",
  component: Tabs
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />

const columns = ['Name', 'Status', 'Created', 'Containers', 'Pod IP'];
const rows = [
  { Name: "mutable-api", Status: "Running", Created: "2021-04-01T03:10:35Z", Containers: "2", PodIP: "10.0.0.5" },
  { Name: "loki-promtail", Status: "Running", Created: "2021-02-01T03:10:35Z", Containers: "1", PodIP: "10.0.1.3" },
  { Name: "loki-prometheus-server", Status: "Running", Created: "2021-01-01T03:10:35Z", Containers: "1", PodIP: "10.0.0.7" }]

const tabs = [
  { name: 'Pods', component: <div><Table columns={columns} rows={rows} /></div> },
  { name: 'Collaborators', component: <div>Collaborators tab content here</div> },
  { name: 'Domains', component: <div>Domains tab content here</div> }
]

export const Default = Template.bind({});
Default.args = {
  tabs: tabs
};

