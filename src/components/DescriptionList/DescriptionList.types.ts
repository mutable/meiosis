import React from "react";

export type DescriptionItemType = "string" | "array" | "preformatted" | "badge" | "reactElement";

export interface DescriptionItemProps {
  key: string;
  value: string | string[] | React.ReactElement | null;
  type?: DescriptionItemType;
}

export interface DescriptionListProps {
  title?: string;
  subtitle?: string;
  items: DescriptionItemProps[];
}
