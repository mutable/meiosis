import { BadgeProps } from "../Badge/Badge.types";

export interface CardProps {
  title: string,
  status?: BadgeProps,
  description: string,
  description2?: string,
  action?: string,
  href: string;
}
