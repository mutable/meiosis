import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Table } from "../Table/Table";
import { DataTableProps } from "./DataTable.types";
export type SortDirection = 'ascending' | 'descending' | 'none'

export type SortConfig = {
  key: string;
  direction: SortDirection;
}

export const DataTable: React.FC<DataTableProps & React.HTMLAttributes<HTMLDivElement>> = ({ className, sortableColumns, ...props }) => {
  const { rows } = props;

  const [sortConfig, setSortConfig] = React.useState<SortConfig | null>(null);
  console.log('sortConfig', sortConfig)

  const sortedRows = React.useMemo(() => {
    let sortedRows = [...rows];

    if (sortConfig !== null && sortConfig.key !== null) {
      sortedRows.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedRows;
  }, [rows, sortConfig]);

  const requestSort = (key: string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig !== null && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return <div {...props}>
    <Table
      onColumnClick={(column) => {
        requestSort(column)
      }}
      columns={props.columns}
      rows={sortedRows}
      sortableColumns={sortableColumns} />
  </div>
};