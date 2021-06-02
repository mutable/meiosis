import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { IconLinkProps } from "./IconLink.types";

export const IconLink: React.FC<IconLinkProps & React.HTMLAttributes<HTMLDivElement>> = ({ iconType, label, href, className, ...props }) => (
  <div className={`flex flex-1 ${className}`} {...props}>
    <Link to={href} className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-pink-600 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
      <Icon src={iconType} className="text-gray-400" />
      <span className="ml-3">{label}</span>
    </Link>
  </div>
);
