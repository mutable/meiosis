import React from "react";
import { Icon } from "../Icon/Icon";
import { SpinnerProps } from "./Spinner.types";

export const Spinner: React.FC<SpinnerProps & React.HTMLAttributes<HTMLDivElement>> = ({ color = "gray-400", backgroundColor = "white", size = 6, className, ...props }) => (
  <div className={`bg-${backgroundColor} h-screen overflow-hidden flex justify-center ${className}`} {...props}>
    <div className="animate-spin m-auto">
      <Icon type="spinner" size={size} className={`text-${color}`} />
    </div>
  </div>
);
