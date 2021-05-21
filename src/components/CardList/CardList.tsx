import React from "react";
import { Card } from "../Card/Card";
import WithLoading from "../HOC/WithLoading/WithLoading";
import { CardListProps } from "./CardList.types";

export const CardList: React.FC<CardListProps & React.HTMLAttributes<HTMLDivElement>> = ({ items, className, ...props }) => (
  <div className={`${className}`} {...props}>
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        items.map((item: any, index) => {
          return (
            <li key={`namespace-${index}`}>
              <Card {...item} />
            </li>
          )
        })
      }
    </ul>
  </div>
);

export const CardListWithLoading = WithLoading(CardList)