export interface DescriptionItemProps {
  key: string;
  value: string;
  preformatted?: boolean;
}

export interface DescriptionListProps {
  title?: string;
  items: DescriptionItemProps[];
}
