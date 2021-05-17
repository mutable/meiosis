import React from "react";
import { Card } from "../Card/Card";
import { CardListProps } from "./CardList.types";

export const CardList: React.FC<CardListProps & React.HTMLAttributes<HTMLDivElement>> = ({ items, className, ...props }) => (
  <div className={`${className}`} {...props}>
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

