export type DescriptionItemType = "string" | "array" | "preformatted" | "badge";

export interface DescriptionItemProps {
  key: string;
  value: string | string[] | object;
  type?: DescriptionItemType;
}

export interface DescriptionListProps {
  title?: string;
  subtitle?: string;
  items: DescriptionItemProps[];
}
