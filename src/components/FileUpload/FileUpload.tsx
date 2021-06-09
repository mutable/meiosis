import { ExclamationCircleIcon } from "@heroicons/react/solid";
import React, { ChangeEvent, useCallback, useState } from "react";
import { Icon } from "../Icon/Icon";
import { FileUploadProps } from "./FileUpload.types";

function trimFileName(fileName: string) {
  const nameLength = 16;
  const delimiter = fileName.lastIndexOf('.');
  const extension = fileName.substring(delimiter);
  const file = fileName.substring(0, delimiter);

  if (file.length < nameLength) {
    return fileName;
  }

  return `${file.substring(0, nameLength)}...${extension}`;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps & React.HTMLAttributes<HTMLDivElement>>(({ onFileUpload, multiple = false, accept, className, invalid, ...otherProps }, ref) => {
  const [files, setFiles] = useState<File[]>([]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let currentFiles: File[] = [];
      if (event.currentTarget?.files?.length) {
        Array.from(event.currentTarget?.files ?? []).forEach(file => {
          if (file)
            currentFiles.push(file)
        });
        currentFiles = [...files, ...currentFiles];
      }

      setFiles(currentFiles);
      if (onFileUpload)
        onFileUpload(currentFiles);
    }, [onFileUpload]
  );

  return (
    <div className={className} >
      <div className="flex items-start mt-1">
        <label htmlFor="file-upload" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md disabled:opacity-70 text-gray-700 hover:text-gray-500 shadow-sm text-sm font-medium rounded-md bg-white focus:outline-none">
          <Icon src={"upload"} className={"-ml-1 mr-2"} aria-hidden="true" />
          Choose File{multiple ? "s" : ""}
        </label>

        <input
          {...otherProps}
          id="file-upload"
          ref={ref}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={onChange}
          className="h-0 w-0"
        />

        <div>
          {files.map((file, index) => (
            <div key={index}
              className="ml-2 text-sm font-medium text-gray-700"
              aria-label="File name" >
              {trimFileName(file.name)}
            </div>
          ))
          }
        </div>

        {invalid &&
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        }
      </div>
    </div>
  );
})