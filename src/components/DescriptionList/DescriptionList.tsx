import React from "react";
import { DescriptionListProps } from "./DescriptionList.types";

export const DescriptionList: React.FC<DescriptionListProps & React.HTMLAttributes<HTMLDivElement>> = ({ title, items, className, ...props }) => {
  return <div className={`bg-white shadow overflow-hidden sm:rounded-lg ${className}`} {...props}>
    {title && <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        {title}
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        {/* Node status and metadata */}
      </p>
    </div>
    }
    {items &&
      <div className="border-t border-gray-200">
        <dl>
          {items.map((item, index) => {
            return <div key={`dl-item-${index}`}
              className={`${index % 2 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
              <dt className="text-sm font-medium text-gray-500">
                {item.key}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {item.preformatted ? <pre>{item.value}</pre> : item.value}
              </dd>
            </div>
          })}
        </dl>
      </div>
    }
  </div>
};
