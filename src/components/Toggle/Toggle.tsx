import React, { useState } from "react";
import { ToggleProps } from "./Toggle.types";
import { Switch } from '@headlessui/react'
import { joinClassnames } from "../../utils/tailwindHelpers";

export const Toggle: React.FC<ToggleProps & React.HTMLAttributes<HTMLDivElement>> = ({ defaultOption, enabledText, disabledText, onChange, className, ...props }) => {
  const [enabled, setEnabled] = useState(defaultOption || false)

  return (
    <div className={joinClassnames("flex", className || "")}>
      <Switch
        checked={enabled}
        onChange={(e) => {
          setEnabled(e);
          if (onChange)
            onChange(e);
        }}
        className={joinClassnames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={joinClassnames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <label className="block text-sm font-medium text-gray-700 ml-2">
        {enabled ? enabledText : disabledText}
      </label>
    </div>
  );
}