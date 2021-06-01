import { SelectValue } from "../Select/Select.types";

export type DataTableColumnType = "string" | "number" | "multiline" | "badge" | "badges" | "custom";
export type SortDirection = "ascending" | "descending" | "none";

export interface DataTableColumnProps {
  id: string;
  display: string;
  type: DataTableColumnType;
  options?: SelectValue[];
  sortable?: boolean;
  searchable?: boolean;
}

export interface MultilineRow {
  line1: string;
  line2?: string;
}

export type SortConfig = {
  key: string;
  direction: SortDirection;
}

export type SearchConfig = {
  key: string;
  term?: string;
}

export interface DataTableProps {
  columns: DataTableColumnProps[];
  rows: any[];
  onSearch?: (searchConfig: SearchConfig) => void;
  onRowClick?: (row: any, index: number) => void;
  onColumnClick?: (column: any, index: number) => void;
  selectable?: boolean;
  selectedRowIndex?: number;
  isLoading?: boolean;
}
