import { Control, RegisterOptions } from "react-hook-form";
import { SelectProps } from "./Select.types";

export interface ControlledSelectProps extends SelectProps {
  name: string;
  control: Control;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
}