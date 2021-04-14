import React from "react";
import { Badge } from "../Badge/Badge";
import { IconLink } from "../IconLink/IconLink";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps & React.HTMLAttributes<HTMLDivElement>> = ({ title, status, description, description2, link1, link2, className, ...props }) => (
  <div className={`col-span-1 bg-white rounded-lg shadow ${className}`} {...props}>
    <div className="w-full flex items-center justify-between p-6 space-x-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="text-gray-900 text-sm font-medium truncate">{title}</h3>
          {status && <Badge {...status} />}
        </div>
        <p className="mt-1 text-gray-500 text-sm truncate">{description}</p>
        {description2 && <p className="mt-1 text-gray-500 text-sm truncate">{description2}</p>}
      </div>
    </div>
    <div className="flex">
      {link1 && <IconLink {...link1} />}
      {link2 && <IconLink {...link2} />}
    </div>
  </div>
);

