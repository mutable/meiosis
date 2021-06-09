import React from "react";
import { ControlledSelectProps } from "./ControlledSelect.types";

import { Controller } from "react-hook-form";
import { Select } from "./Select";

/** Controlled Select should be used in Forms. It receives the `control` object from the Form and takes care of the field registration. 
 * More info: [UseForm - Controller](https://react-hook-form.com/api/usecontroller/controller)  */
export const ControlledSelect: React.FC<ControlledSelectProps & React.HTMLAttributes<HTMLDivElement>> = ({ name, control, rules, defaultSelected, className, ...props }) => {
  return (<Controller
    control={control}
    defaultValue={defaultSelected}
    name={name}
    rules={rules}
    render={({ field }) => (
      <Select
        handleChange={(e: any) => { field.onChange(e) }}
        defaultSelected={defaultSelected}
        {...props} />
    )}
  />
  )
}