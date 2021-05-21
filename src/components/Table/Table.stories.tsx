import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Table, TableWithLoading } from './Table';
import { TableProps } from './Table.types';
import { Button } from '../Button/Button';

const Template: Story<TableProps> = (args) => <Table {...args} />;

export default {
  component: Table,
  title: "Visualizations/Table",
  argTypes: {}
} as Meta;

const columns = ['Name', 'Status', 'Created', 'Containers', 'Pod IP', ''];
const rows = [
  {
    Name: "mutable-api", Status: "Running", Created: "2021-04-01T03:10:35Z", Containers: "2", PodIP: "10.0.0.5", id: { type: "hidden", value: "1" },
    edit: <Button
      label="Edit"
      onClick={() => alert("button clicked")} />,
  },
  {
    Name: "loki-promtail", Status: "Running", Created: "2021-02-01T03:10:35Z", Containers: "1", PodIP: "10.0.1.3", id: { type: "hidden", value: "2" },
    edit: <Button
      label="Edit"
      onClick={() => alert("button clicked")} />,
  },
  {
    Name: "loki-prometheus-server", Status: "Running", Created: "2021-01-01T03:10:35Z", Containers: "1", PodIP: "10.0.0.7", id: { type: "hidden", value: "3" },
    edit: <Button
      label="Edit"
      onClick={() => alert("button clicked")} />
  }]

export const Default = Template.bind({});
Default.args = {
  columns: columns,
  rows: rows,
  onRowClick: (row) => {
    alert("row clicked")
    console.log(row)
  }
};

export const Selectable: Story = (args) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  return (
    <Table
      columns={columns}
      rows={rows}
      selectable
      selectedRowIndex={selectedRowIndex}
      onRowClick={(row, index) => setSelectedRowIndex(index)}
    />
  );
};

export const WithLoading: Story = (args) => {
  const [loading, setLoading] = useState(true);

  setTimeout(function () { setLoading(false) }, 2000);

  return (
    <TableWithLoading
      isLoading={loading}
      columns={columns}
      rows={rows}
    />
  );
};