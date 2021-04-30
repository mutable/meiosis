export type AlertType = "success" | "warning" | "error" | "info";

export interface AlertProps {
  type: AlertType;
  message: string;
}
