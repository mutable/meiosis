export type DescriptionItemType = "string" | "array" | "preformatted";

export interface DescriptionItemProps {
  key: string;
  value: string | string[];
  type?: DescriptionItemType;
}

export interface DescriptionListProps {
  title?: string;
  subtitle?: string;
  items: DescriptionItemProps[];
}
