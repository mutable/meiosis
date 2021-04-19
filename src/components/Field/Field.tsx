import React from "react";
import { FieldProps } from "./Field.types";

export const Field: React.FC<FieldProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  label,
  description,
  invalid,
  required,
  error,
  className,
  ...props }) => {

  return (
    <div className={className}>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {label}{required ? ' *' : ''}
      </label>
      <p className="text-sm text-gray-500" id="email-description">
        {description}
      </p>
      {React.cloneElement(children, { invalid, ...props })}

      {invalid && error &&
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      }
    </div>
  );
}
