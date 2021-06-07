import React from "react";
import { joinClassnames } from "../../utils/tailwindHelpers";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/Icon.types";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant,
  label,
  iconBefore,
  iconAfter,
  loading,
  disabled,
  onClick,
  textAlign = "left",
  className,
  ...props }) => {
  let styles = "";
  let iconColor = "";
  switch (variant) {
    case "primary":
      iconColor = "text-white"
      styles = "shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      break
    case "secondary":
      iconColor = "text-indigo-700"
      styles = "shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      break;
    case "pink":
      iconColor = "text-gray-400"
      styles = "text-pink-600 hover:text-gray-500 focus:outline-none";
      break;
    case "white":
    default:
      iconColor = ""
      styles = "text-gray-700 hover:text-gray-500 shadow-sm text-sm font-medium rounded-md bg-white focus:outline-none"
      break;
  }

  let justify;
  switch (textAlign) {
    case "center":
      justify = "justify-center";
      break;
    case "right":
      justify = "justify-end";
      break;
    case "left":
    default:
      justify = "justify-start";
      break;
  }

  return (
    <button
      onClick={(e) => {
        if (onClick) {
          onClick(e);
          e.stopPropagation();
        };
      }}
      disabled={loading ? true : disabled}
      className={joinClassnames("inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md disabled:opacity-70", styles, justify, className || "")}
      {...props}
    >
      {loading && <>
        <Icon src="spinner" className={joinClassnames("animate-spin -ml-1 mr-2", iconColor)} aria-hidden="true" />
          Loading...
      </>}

      {!loading && iconBefore && <Icon src={iconBefore} className={joinClassnames("-ml-1 mr-2", iconColor)} aria-hidden="true" />}
      {!loading && label}
      {!loading && iconAfter && <Icon src={iconAfter} className={joinClassnames("ml-2 -mr-1", iconColor)} aria-hidden="true" />}
    </button>
  );
};
