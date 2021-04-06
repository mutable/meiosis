export interface TableProps {
  /**
   * Array of column names
   */
  columns: string[],
  /**
   * Array of row objects. Number of keys in each row should match the number of columns. 
   */
  rows: any[],
  onRowClick: (row: any) => void;
}
