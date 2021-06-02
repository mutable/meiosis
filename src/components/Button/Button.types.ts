import { MouseEventHandler } from "react";
import { IconType } from "../Icon/Icon.types";

export type ButtonVariant = "primary" | "secondary" | "white" | "pink";

export interface ButtonProps {
  /**
   * ButtonType = "primary" | "secondary" | "white" | "pink";
   */
  variant?: ButtonVariant;
  /**
   * Button contents
   */
  label: string;
  iconBefore?: IconType | string | object;
  iconAfter?: IconType | string | object;
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler;
  /**
   * Show loading spinner 
   */
  loading?: boolean;
}
