import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { DescriptionList } from "./DescriptionList";
import { DescriptionListProps } from './DescriptionList.types'

export default {
  title: "Visualizations/Description List",
  component: DescriptionList
} as Meta;

const Template: Story<DescriptionListProps> = (args) => <DescriptionList {...args} />;

const mockData = [
  {
    key: "Name",
    value: "Pod 1"
  },
  {
    key: "Created",
    value: "2021-03-04T15:38:43.514Z"
  },
  {
    key: "Host IP",
    value: "10.0.1.3"
  },
  {
    key: "Deployment YAML",
    value: `---
apiVersion: apps/v1
matchLabels:
  app: domain-manager
type: Recreate
spec:
  containers:
  - env:
    - name: METRICS_ADDR
      value: ":8080"
    - name: LEADER_ELECTION
      value: 'true'`,
    preformatted: true
  }
]

export const Default = Template.bind({});
Default.args = {
  title: "Pod information",
  items: mockData
};
