import React from "react";
import { SortConfig, SortDirection } from "../DataTable/DataTable.types";

const useSortableData = (items: any[], config: SortConfig | null, onSort: ((sortConfig: SortConfig) => void) | undefined) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortedItems = [...items];

    if (sortConfig !== null && sortConfig.key !== null) {
      sortedItems.sort((a, b) => {
        let val1 = a[sortConfig.key]?.line1 ? a[sortConfig.key].line1 : a[sortConfig.key];
        let val2 = b[sortConfig.key]?.line1 ? b[sortConfig.key].line1 : b[sortConfig.key];

        if (val1 < val2) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (val1 > val2) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }

        let subVal1 = a[sortConfig.key]?.line2;
        let subVal2 = b[sortConfig.key]?.line2;

        // in case of "multiline" values, sort by second line when first lines are equal
        if (subVal1 && subVal2) {
          if (subVal1 < subVal2) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (subVal1 > subVal2) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }

        return 0;
      });
    }
    return sortedItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig !== null && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    if (onSort)
      onSort({ key, direction })
    else
      setSortConfig({ key, direction });
  }

  return { sortedItems, requestSort };
}

export default useSortableData;