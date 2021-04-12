import { BadgeProps } from "../Badge/Badge.types";
import { IconLinkProps } from "../IconLink/IconLink.types";

export interface CardProps {
  title: string,
  status?: BadgeProps,
  description: string,
  description2?: string,
  link1?: IconLinkProps,
  link2?: IconLinkProps,
}
