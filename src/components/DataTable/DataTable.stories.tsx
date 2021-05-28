import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { DataTable } from "./DataTable";
import { Pagination } from "../Pagination/Pagination";

export default {
  title: "Visualizations/DataTable",
  component: DataTable
} as Meta;

const columns = ['Name', 'Status', 'Containers', 'IP', ''];
const rows = [
  [
    { Name: "mutable-api", Status: "Running", Containers: "2", IP: "10.0.0.5", },
    { Name: "loki-promtail", Status: "Running", Containers: "1", IP: "10.0.1.3", },
    { Name: "loki-prometheus-server", Status: "Running", Containers: "8", IP: "10.0.0.7", }
  ],
  [
    { Name: "some-other-api", Status: "Running", Containers: "3", IP: "10.0.0.5", },
    { Name: "test", Status: "Running", Containers: "1", IP: "10.0.1.3", },
    { Name: "some-server", Status: "Running", Containers: "4", IP: "10.0.0.7", }
  ],
  [
    { Name: "mutable-api", Status: "Running", Containers: "5", IP: "10.0.0.5", },
    { Name: "loki-promtail", Status: "Running", Containers: "2", IP: "10.0.1.3", }
  ],
]

export const Default: Story = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRows, setPageRows] = useState(rows[currentPage - 1]);


  return (
    <>
      <DataTable
        columns={columns}
        rows={pageRows}
        sortableColumns={["Name", "Containers", "IP"]}
      />
      <Pagination
        currentPage={currentPage}
        totalItems={8}
        pageLimit={3}
        onPageChanged={(page) => {
          setCurrentPage(page);
          setPageRows(rows[page - 1]);
        }}
      />
    </>
  );
};