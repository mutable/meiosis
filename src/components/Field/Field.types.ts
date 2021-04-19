export interface FieldProps {
  /** Form input element such as Input */
  children: React.ReactElement;
  /** Label for the field */
  label?: string;
  /** Description of the field */
  description?: string;
  /** Indicates if field is in invalid state */
  invalid?: boolean;
  /** Indicates if field is disabled */
  disabled?: boolean;
  /** Indicates if field is required */
  required?: boolean;
  /** Error message to display */
  error?: string | null;
}
