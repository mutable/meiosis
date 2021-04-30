import React from "react";
import { Card } from "../Card/Card";
import { CardListProps } from "./CardList.types";

export const CardList: React.FC<CardListProps & React.HTMLAttributes<HTMLDivElement>> = ({ items, className, ...props }) => (
  <div className={`${className}`} {...props}>
    <div className="grid-cols-3 align-middle inline-block w-full">
      <ul className="grid grid-cols-3 gap-6">
        {
          items.map((item: any, index) => {
            return (
              <li key={`namespace-${index}`} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <Card {...item} />
              </li>
            )
          })
        }
      </ul>
    </div>
  </div>
);

