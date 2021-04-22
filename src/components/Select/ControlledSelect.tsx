import React from "react";
import { ControlledSelectProps } from "./ControlledSelect.types";

import { Controller } from "react-hook-form";
import { Select } from "./Select";

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