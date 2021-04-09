import React from "react";
import { BadgeProps } from "./Badge.types";

export const Badge: React.FC<BadgeProps> = ({ color, text, ...props }) => {
  let colorClass = "";
  switch (color) {
    case "blue":
      colorClass = "text-blue-800 bg-blue-100";
      break;
    case "green":
      colorClass = "text-green-800 bg-green-100";
      break;
    case "orange":
      colorClass = "text-yellow-800 bg-yellow-100";
      break;
    case "red":
      colorClass = "text-red-800 bg-red-100";
      break;
  }

  return (
    <span className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${colorClass}`}>{text}</span>
  );
}