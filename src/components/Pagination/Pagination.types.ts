export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageLimit?: number;
  onPageChanged?: (page: number) => void;
}
