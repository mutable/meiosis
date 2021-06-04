import React, { useEffect, useState } from "react";
import { AlertProps } from "./Alert.types";
import { CheckCircleIcon, ExclamationIcon, XCircleIcon, InformationCircleIcon, XIcon } from '@heroicons/react/solid'


export const Alert: React.FC<AlertProps & React.HTMLAttributes<HTMLDivElement>> = ({ type, showX = false, timeout, message, className, ...props }) => {
  const [show, setShow] = useState<boolean>(!!message);

  useEffect(() => {
    setShow(!!message);

    if (timeout) {
      const timeId = setTimeout(() => {
        setShow(false);
      }, timeout, []);

      return () => {
        clearTimeout(timeId)
      }
    }
  }, [message]);

  if (!show)
    return null;

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
    <div className={`rounded-md bg-${colors}-50 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 text-${colors}-400`} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium text-${colors}-800`}>{message}</p>
        </div>
        {showX && <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
              onClick={() => { setShow(false) }}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        }
      </div>
    </div>
  )
};
