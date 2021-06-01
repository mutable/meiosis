import React from "react";
import { SelectorIcon } from "@heroicons/react/solid";
import { joinClassnames } from "../../helpers/tailwindHelpers";
import { Badge } from "../Badge/Badge";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Spinner } from "../Spinner/Spinner";
import { DataTableColumnProps, DataTableProps, SortConfig, SortDirection } from "./DataTable.types";

export const DataTable: React.FC<DataTableProps & React.HTMLAttributes<HTMLDivElement>> = ({
  columns,
  rows,
  onRowClick,
  onColumnClick,
  selectable,
  selectedRowIndex,
  onSearch,
  isLoading = false,
  className, ...props }) => {

  const [sortConfig, setSortConfig] = React.useState<SortConfig | null>(null);

  const sortedRows = React.useMemo(() => {
    let sortedRows = [...rows];

    if (sortConfig !== null && sortConfig.key !== null) {
      sortedRows.sort((a, b) => {
        let val1 = a[sortConfig.key]?.line1 ? a[sortConfig.key].line1 : a[sortConfig.key];
        let val2 = b[sortConfig.key]?.line1 ? b[sortConfig.key].line1 : b[sortConfig.key];

        if (val1 < val2) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (val1 > val2) {
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

  const statusToColor = (status: string) => {
    if (!status)
      return "blue";
    switch (status.toLowerCase()) {
      case "":
      case "active":
      case "normal":
      case "running":
        return "green";
      case "critical":
        return "red";
      default:
        return "blue";
    }
  }

  const cellContent = (col: DataTableColumnProps, row: any) => {
    const value = row[col.id];
    switch (col.type) {
      case "string":
      case "number":
      case "custom":
        return value;
      case "badge":
        return <Badge text={value} color={statusToColor(value)} />;
      case "badges":
        if (value && value.length)
          return value.map((item: string, index: number) => <Badge
            className='mx-1'
            key={`tag-${index}-${item}`}
            color="blue"
            text={item} />)
        return value;
      case "multiline":
        return value && <>
          <div className="text-sm font-medium text-gray-900">{value.line1}</div>
          <div className="text-sm text-gray-500">{value.line2}</div>
        </>
    }
  }

  return <div className={`flex flex-col ${className}`} {...props}>
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns?.map((item: DataTableColumnProps, index) => {
                  return <th
                    key={`col-${index}`}
                    scope="col"
                    className={joinClassnames("px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider hover:bg-gray-100", item.sortable ? "cursor-pointer" : "")}
                  >
                    <div className="flex"
                      onClick={() => {
                        if (item.sortable)
                          requestSort(item.id)
                      }}>
                      {item.display}
                      {item.sortable &&
                        <SelectorIcon className="ml-3 h-4 w-4 text-gray-400" />
                      }
                    </div>

                    {
                      item.searchable && item.options &&
                      <Select options={item.options}
                        handleChange={(e) => {
                          if (onSearch)
                            onSearch({
                              key: item.id,
                              term: e?.value?.toLowerCase()
                            })
                        }}
                        showEmptyOption
                      />
                    }

                    {
                      item.searchable && !item.options &&
                      <Input
                        type="text"
                        onInput={(e: any) => {
                          if (onSearch)
                            onSearch({
                              key: item.id,
                              term: e.target.value?.toLowerCase()
                            })
                        }}
                      />
                    }
                  </th>
                })}
              </tr>
            </thead>



            <tbody>

              {isLoading &&
                <tr>
                  <td colSpan={columns?.length}>
                    <div className="flex justify-center w-full">
                      <Spinner
                        fullHeight={false}
                      />
                    </div>
                  </td>
                </tr>
              }

              {!isLoading && sortedRows?.map((row: any, index) => {
                let accentColor;
                if (selectable && selectedRowIndex === index)
                  accentColor = "bg-gray-200"
                else
                  accentColor = index % 2 ? 'bg-gray-50' : 'bg-white'

                return <tr key={`row-${index}`}
                  className={`${accentColor} hover:bg-gray-100 cursor-pointer`}
                  onClick={() => {
                    if (onRowClick)
                      onRowClick(row, index)
                  }}>

                  {columns?.map((item: DataTableColumnProps, index) => (
                    <td key={`value-${index}`}
                      className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      {cellContent(item, row)}
                    </td>
                  ))
                  }
                </tr>
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
};

