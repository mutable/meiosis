import React from "react";
import { ControlledReactSelectProps } from "./ControlledReactSelect.types";

import { Controller } from "react-hook-form";
import { ReactSelect } from "./ReactSelect";

/** Controlled Select should be used in Forms. It receives the `control` object from the Form and takes care of the field registration. 
 * More info: [UseForm - Controller](https://react-hook-form.com/api/usecontroller/controller)  */
export const ControlledReactSelect: React.FC<ControlledReactSelectProps & React.HTMLAttributes<HTMLDivElement>> = ({ name, control, rules, defaultOption, className, onChange, ...props }) => {
  return (<Controller
    control={control}
    defaultValue={defaultOption}
    name={name}
    rules={rules}
    render={({ field }) => (
      <ReactSelect
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