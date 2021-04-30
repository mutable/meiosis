import React from "react";
import { BadgeProps } from "../Badge/Badge.types";
import { IconLinkProps } from "../IconLink/IconLink.types";

export interface CardProps {
  title: string,
  status?: BadgeProps,
  description: string,
  description2?: string,
  buttons: React.ReactElement[]
}
