import React from "react";
import { joinClassnames } from "../../helpers/tailwindHelpers";
import { Icon } from "../Icon/Icon";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant,
  label,
  iconBefore,
  iconAfter,
  loading,
  disabled,
  onClick,
  className,
  ...props }) => {
  let styles = "";
  let textColor = "";
  switch (variant) {
    case "primary":
      textColor = "white"
      styles = "shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      break
    case "secondary":
      textColor = "indigo-700"
      styles = "bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      break;
    case "transparent":
    default:
      textColor = "gray-700"
      styles = "bg-white hover:bg-gray-50 focus:outline-none "
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={loading ? true : disabled}
      className={joinClassnames("inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md disabled:opacity-70", styles, "text-" + textColor, className || "")}
      {...props}
    >
      {loading && <>
        <Icon type="spinner" color={textColor} className="animate-spin -ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Loading...
      </>}
      {!loading && iconBefore && <Icon color={textColor} type={iconBefore} className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />}
      {!loading && label}
      {!loading && iconAfter && <Icon color={textColor} type={iconAfter} className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />}
    </button>
  );
};
