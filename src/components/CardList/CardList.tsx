import React from "react";
import { Card } from "../Card/Card";
import { CardListProps } from "./CardList.types";

export const CardList: React.FC<CardListProps & React.HTMLAttributes<HTMLDivElement>> = ({ title, cards, className, ...props }) => (
  <div className={`${className}`} {...props}>
    <h1 className="m-4 text-lg font-medium leading-6 text-gray-900">
      {title}
    </h1>
    <div className="grid-cols-3 py-2 align-middle inline-block px-4 w-full">
      <ul className="grid grid-cols-3 gap-6">
        {
          cards.map((item: any, index) => {
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

