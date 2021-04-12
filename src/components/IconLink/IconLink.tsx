import React from "react";
import { Icon } from "../Icon/Icon";
import { IconLinkProps } from "./IconLink.types";

export const IconLink: React.FC<IconLinkProps> = ({ iconType, label, href, ...props }) => (
  <div className="flex flex-1">
    <a href={href} className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-pink-600 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
      <Icon type={iconType} color="gray" />
      <span className="ml-3">{label}</span>
    </a>
  </div>
);
