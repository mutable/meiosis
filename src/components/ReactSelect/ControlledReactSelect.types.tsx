import { Control, RegisterOptions } from "react-hook-form";
import { ReactSelectProps } from "./ReactSelect.types";

export interface ControlledReactSelectProps extends ReactSelectProps {
  name: string;
  control: Control;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
}