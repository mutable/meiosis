import React from "react";
import { AlertProps } from "./Alert.types";
import { CheckCircleIcon, ExclamationIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/solid'


export const Alert: React.FC<AlertProps & React.HTMLAttributes<HTMLDivElement>> = ({ type, message, className, ...props }) => {
  let colors;
  let Icon;
  switch (type) {
    case "success":
      colors = "green"
      Icon = CheckCircleIcon;
      break;
    case "warning":
      colors = "yellow"
      Icon = ExclamationIcon;
      break;
    case "error":
      colors = "red"
      Icon = XCircleIcon;
      break;
    case "info":
    default:
      colors = "blue"
      Icon = InformationCircleIcon;
      break;
  }
  return (
    <>
      <div className={`rounded-md bg-${colors}-50 p-4`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon className={`h-5 w-5 text-${colors}-400`} aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium text-${colors}-800`}>{message}</p>
          </div>
        </div>
      </div>
    </>
  )
};
