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
    key: "Host IP",
    value: [
      ["architecture", "amd64"],
      ["bootID", "20e3bb64-3517-49f8-a2eb-ed7d96cce818"],
      ["containerRuntimeVersion", "docker://19.3.14"],
      ["kernelVersion", "5.4.89+"],
      ["kubeProxyVersion", "v1.19.8-gke.2000"],
      ["kubeletVersion", "v1.19.8-gke.2000"],
    ],
    type: "array"
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
    type: "preformatted"
  }
]

export const Default = Template.bind({});
Default.args = {
  title: "Pod information",
  items: mockData
};
