import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { DataTable } from "./DataTable";
import { Pagination } from "../Pagination/Pagination";
import { Button } from "../Button/Button";
import { DataTableColumnProps, SearchConfig } from "./DataTable.types";
import { SelectValue } from "../Select/Select.types";

export default {
  title: "Visualizations/DataTable",
  component: DataTable
} as Meta;

const allStatuses: SelectValue[] = [
  { id: "active", value: "Active" },
  { id: "critical", value: "Critical" },
  { id: "unknown", value: "Unknown" }
]

const columns: DataTableColumnProps[] = [
  { id: 'name', display: "Name", type: "string", sortable: true, searchable: true },
  { id: 'status', display: "Status", type: "badge", sortable: true, searchable: true, options: allStatuses },
  { id: 'details', display: "Details", type: "multiline", sortable: true, searchable: true },
  { id: 'tags', display: "Tags", type: "badges", sortable: true, searchable: true },
  { id: 'containers', display: "Containers", type: "number", sortable: true, searchable: true },
  { id: 'edit', display: "", type: "custom" },
];

const rows = [
  { name: "mutable-api", status: "Active", details: { line1: "Some details", line2: "MUT ! " }, tags: ["test1", "test2"], containers: 12, edit: <Button label="Edit" onClick={() => { console.log('smt') }} /> },
  { name: "loki-promtail", status: "Unknown", details: { line1: "Other details", line2: "More details" }, tags: ["region:east"], containers: 1, edit: <Button label="Edit" onClick={() => { console.log('smt') }} /> },
  { name: "loki-prometheus-server", status: "Critical", details: { line1: "Test details", line2: "Mure details" }, tags: ["region:west", "test2"], containers: 4 },
  { name: "some-other-api", status: "Active", details: { line1: "Server Connected in Sioux Falls, SD", line2: "MUT 1 Network Connected" }, tags: ["a", "a", "a"], containers: 45 },
  { name: "loki-test-api", status: "Critical", details: { line1: "Server Unreachable in Midco Labs", line2: "MUT 2 Network Unreachable" }, tags: ["a", "b", "c"], containers: 4 },
];

export const Default: Story = (args) => {
  const limit = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchConfigs, setSearchConfigs] = useState<SearchConfig[]>([]);

  const applyFilters = (items, searchConfigs: SearchConfig[]) => {
    if (!searchConfigs)
      return items;

    let filtered = items;

    searchConfigs.forEach(searchConfig => {
      if (searchConfig)
        filtered = filtered.filter(row => {
          const cell = row[searchConfig.key];

          return !searchConfig.term || (cell &&
            (
              (cell.line1 && cell.line1.toLowerCase().includes(searchConfig.term)) || // if column type is "multiline"
              (cell.line2 && cell.line2.toLowerCase().includes(searchConfig.term)) ||
              (typeof cell === "string" && cell.toLowerCase().includes(searchConfig.term)) || // if column type is "string" or "badge"
              (typeof cell === "number" && cell.toString().includes(searchConfig.term)) || // if column type is "number"
              (Array.isArray(cell) && cell.some(item => item && typeof item === "string" && item.toLowerCase().includes(searchConfig.term))) // if column type is "badges"
            )
          )
        })
    })

    return filtered;
  }

  const applyPagination = (items, page) => {
    return items.slice((page - 1) * limit, page * limit)
  }

  return (
    <div className="h-1/2">
      <DataTable
        columns={columns}
        rows={applyPagination(applyFilters(rows, searchConfigs), currentPage)}
        onSearch={(searchConfig: SearchConfig) => {
          setCurrentPage(1);
          setSearchConfigs([...searchConfigs.filter(item => item.key !== searchConfig.key), searchConfig]);
        }}
      />
      <Pagination
        currentPage={currentPage}
        totalItems={applyFilters(rows, searchConfigs).length}
        pageLimit={3}
        onPageChanged={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export const Loading: Story = (args) => {
  return <DataTable
    columns={columns}
    isLoading={true}
    rows={rows}
  />
}