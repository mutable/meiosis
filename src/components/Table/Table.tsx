import React from "react";
import WithLoading from "../HOC/WithLoading/WithLoading";
import { TableProps } from "./Table.types";

export const Table: React.FC<TableProps & React.HTMLAttributes<HTMLDivElement>> = ({
  columns,
  rows,
  onRowClick,
  selectable,
  selectedRowIndex,
  className,
  ...props }) => {

  return <div className={`flex flex-col ${className}`} {...props}>
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns?.map((item: any, index) => {
                  return <th key={`col-${index}`} scope="col" className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                    {item}
                  </th>
                })}
              </tr>
            </thead>

            <tbody>
              {rows?.map((row: any, index) => {
                let accentColor;
                if (selectable && selectedRowIndex === index)
                  accentColor = "bg-gray-200"
                else
                  accentColor = index % 2 ? 'bg-gray-50' : 'bg-white'

                return <tr key={`row-${index}`} className={`${accentColor} hover:bg-gray-100 cursor-pointer`} onClick={() => {
                  if (onRowClick)
                    onRowClick(row, index)
                }}>
                  {Object.values(row).map((value: any, index) => {
                    if (value.type === "hidden")
                      return;

                    return <td key={`value-${index}`} className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      {value}
                    </td>
                  })
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

export const TableWithLoading = WithLoading(Table);