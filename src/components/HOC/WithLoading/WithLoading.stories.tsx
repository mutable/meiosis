import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { TableWithLoading } from "../../Table/Table";

export default {
  title: "HOC/WithLoading"
} as Meta;

const columns = ['Name', 'Status', 'Created',];
const rows = [
  { Name: "mutable-api", Status: "Running", Created: "2021-04-01T03:10:35Z" },
  { Name: "loki-promtail", Status: "Running", Created: "2021-02-01T03:10:35Z" },
  { Name: "loki-prometheus-server", Status: "Running", Created: "2021-01-01T03:10:35Z" }]

export const Loading: Story = (args) => {
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
