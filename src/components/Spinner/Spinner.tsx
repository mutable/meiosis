import React from "react";
import { joinClassnames } from "../../utils/tailwindHelpers";
import { Icon } from "../Icon/Icon";
import { SpinnerProps } from "./Spinner.types";

export const Spinner: React.FC<SpinnerProps & React.HTMLAttributes<HTMLDivElement>> = ({ fullHeight = true, color = "gray-400", backgroundColor = "white", size = 6, className, ...props }) => (
  <div className={joinClassnames(`bg-${backgroundColor} overflow-hidden flex justify-center`, fullHeight ? "h-screen" : "h-40", className || "")} {...props}>
    <div className="animate-spin m-auto">
      <Icon src="spinner" size={size} className={`text-${color}`} />
    </div>
  </div>
);
