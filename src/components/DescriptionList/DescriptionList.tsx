import React from "react";
import WithLoading from "../HOC/WithLoading/WithLoading";
import { DescriptionItemProps, DescriptionItemType, DescriptionListProps } from "./DescriptionList.types";

export const DescriptionList: React.FC<DescriptionListProps & React.HTMLAttributes<HTMLDivElement>> = ({ title, subtitle, items, className, ...props }) => {
  const renderValue = (descItem: DescriptionItemProps) => {
    switch (descItem.type) {
      case "preformatted":
        return <pre>{descItem.value}</pre>
      case "array":
        return (descItem.value as string[]).map((item, index) =>
          <li key={`nodeinfo-${index}`} className="flex items-center justify-between text-sm">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex-1 w-0 truncate">
                <span className='font-medium text-gray-500'>{item[0]}: </span>{item[1]}
              </span>
            </div>
          </li>
        )
      case "string":
      default:
        return descItem.value;
    }
  }

  return <div className={`bg-white shadow overflow-hidden sm:rounded-lg ${className}`} {...props}>
    {title && <div className="p-4">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        {title}
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        {subtitle}
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
                {renderValue(item)}
              </dd>
            </div>
          })}
        </dl>
      </div>
    }
  </div>
};

export const DescriptionListWithLoading = WithLoading(DescriptionList)
