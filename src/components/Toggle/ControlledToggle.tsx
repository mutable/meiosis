import React from "react";
import { Controller } from "react-hook-form";
import { ControlledToggleProps } from "./ControlledToggle.types";
import { Toggle } from "./Toggle";

/** Controlled Toggle should be used in Forms. It receives the `control` object from the Form and takes care of the field registration. 
 * More info: [UseForm - Controller](https://react-hook-form.com/api/usecontroller/controller)  */
export const ControlledToggle: React.FC<ControlledToggleProps & React.HTMLAttributes<HTMLDivElement>> = ({ name, control, rules,
  defaultOption,
  className, onChange, ...props }) => {
  return (<Controller
    control={control}
    defaultValue={defaultOption}
    name={name}
    rules={rules}
    render={({ field }) => (
      <Toggle
        onChange={(e: any) => {
          field.onChange(e);
          if (onChange)
            onChange(e);
        }}
        defaultOption={defaultOption}
        {...props} />
    )}
  />
  )
}