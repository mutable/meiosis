export type AlertType = "success" | "warning" | "error" | "info";

export interface AlertProps {
  /**
   * Indicated the color and icon of the Alert
   */
  type: AlertType;
  /**
   * Alert message
   */
  message: string;
  /**
   * Alert timeout in milliseconds
   */
  timeout?: number;
  /** 
   * Show X button to close the Alert
   */
  showX?: boolean;
}
