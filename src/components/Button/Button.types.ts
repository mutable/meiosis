import { IconType } from "../Icon/Icon.types";

export type ButtonVariant = "primary" | "secondary" | "transparent";

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
  onClick?: () => void;
  /**
   * Show loading spinner 
   */
  loading?: boolean;
}
