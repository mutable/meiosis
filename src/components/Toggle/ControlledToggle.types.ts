import { Control, RegisterOptions } from "react-hook-form";
import { ToggleProps } from "./Toggle.types";

export interface ControlledToggleProps extends ToggleProps {
  name: string;
  control: Control;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
}