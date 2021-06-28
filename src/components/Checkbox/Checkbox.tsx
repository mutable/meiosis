import React, { InputHTMLAttributes } from "react";
import { joinClassnames } from "../../utils/tailwindHelpers";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps & InputHTMLAttributes<HTMLInputElement>>(({
  defaultOption, label, className, ...otherProps }, ref) => {
  return (
    <div className={joinClassnames("flex", className || "")}>
      <label className="flex items-center">
        <input
          {...otherProps}
          type="checkbox"
          className="block focus:outline-none sm:text-sm rounded focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
          defaultChecked={defaultOption}
          ref={ref as React.ForwardedRef<HTMLInputElement>} />
        <span className="ml-2">{label}</span>
      </label>
    </div >
  );
});
