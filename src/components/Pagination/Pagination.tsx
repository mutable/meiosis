import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { joinClassnames } from "../../utils/tailwindHelpers";
import { PaginationProps } from "./Pagination.types";

export const Pagination: React.FC<PaginationProps & React.HTMLAttributes<HTMLDivElement>> = ({ currentPage, totalItems, pageLimit = 10, onPageChanged, className, ...props }) => {
  const totalPages = Math.ceil(totalItems / pageLimit);

  const gotoPage = (page: number) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));
    if (onPageChanged)
      onPageChanged(currentPage);
  }

  if (totalPages <= 1)
    return null;

  return (<div
    className={`px-4 mb-4 flex items-center justify-between sm:px-0 ${className}`} {...props}
    aria-label="Pagination"
  >
    <div className="-mt-px w-0 flex-1 flex ml-4">
      <button
        className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200 focus:outline-none"
        onClick={() => gotoPage(currentPage - 1)}
        disabled={currentPage === 1}>
        <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        Previous
    </button>
    </div>

    <div className="hidden md:-mt-px md:flex">
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;

        return (<button
          key={page}
          className={joinClassnames(page === currentPage ?
            "border-purple-500 text-purple-600" :
            "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
            "border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium focus:outline-none")}
          onClick={() => gotoPage(page)}>
          {page}
        </button>)
      })
      }
    </div>
    <div className="-mt-px w-0 flex-1 flex justify-end mr-4">
      <button
        className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200 focus:outline-none"
        onClick={() => gotoPage(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
        <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>
  </div>);
}