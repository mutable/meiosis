import React from "react";
import { Icon } from "../Icon/Icon";
import { SpinnerProps } from "./Spinner.types";

export const Spinner: React.FC<SpinnerProps> = ({ color = "gray", backgroundColor = "white", size = 6, ...props }) => (
  <div className={`bg-${backgroundColor} h-screen overflow-hidden flex justify-center`}>
    <div className="animate-spin m-auto">
      <Icon type="spinner" size={size} color={color} />
    </div>
  </div>
);
