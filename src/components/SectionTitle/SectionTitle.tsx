import React from "react";
import { SectionTitleProps } from "./SectionTitle.types";

export const SectionTitle: React.FC<SectionTitleProps & React.HTMLAttributes<HTMLDivElement>> = ({ title, subtitle, className, ...props }) => (
  <h1 className={`mt-4 mb-2 text-lg font-medium leading-6 text-gray-900 sm:truncate ${className}`}>
    {title}
    <p className="mt-1 max-w-2xl text-sm text-gray-500">
      {subtitle}
    </p>
  </h1>
);
