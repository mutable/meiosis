import { MouseEventHandler } from "react";
import { IconType } from "../Icon/Icon.types";

export type ButtonVariant = "primary" | "secondary" | "white" | "pink";

export interface ButtonProps {
  /**
   * ButtonType = "primary" | "secondary" | "transparent";
   */
  variant?: ButtonVariant;
  /**
   * Button contents
   */
  label: string;
  iconBefore?: IconType;
  iconAfter?: IconType;
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler;
  /**
   * Show loading spinner 
   */
  loading?: boolean;
}
