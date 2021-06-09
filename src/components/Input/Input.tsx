import React, { InputHTMLAttributes } from "react";
import { InputProps } from "./Input.types";
import { ExclamationCircleIcon } from '@heroicons/react/solid'

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>(({ invalid, rows = 1, ...otherProps }, ref) => {
  const inputColors = invalid ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500 border-gray-300";

  return (
    <div className={`mt-1 relative rounded-md shadow-sm`}>
      {rows <= 1 &&
        <input
          {...otherProps}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${inputColors}`}
          aria-invalid="true"
          aria-describedby="field"
        />}

      {rows > 1 && <textarea  {...otherProps}
        ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
        className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${inputColors}`}
        aria-invalid="true"
        rows={rows}
        aria-describedby="field"></textarea>}

      {invalid &&
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      }
    </div>
  );
})