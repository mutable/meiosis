import React, { ChangeEvent, useCallback, useState } from "react";
import { Button } from "../Button/Button";
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

export const FileUpload: React.FC<FileUploadProps & React.HTMLAttributes<HTMLDivElement>> = ({ onFileUpload, btnVariant, accept, className, ...props }) => {
  const [fileName, setFileName] = useState('');

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput !== null) {
      hiddenFileInput.current?.click();
    }
  };

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget?.files?.[0];
      
      setFileName(file && file.name ? file.name : '');
      onFileUpload(event);
    },
    [onFileUpload]
  );

  return (
    <>
      <Button
        iconBefore="upload"
        onClick={handleClick}
        label="Upload a file"
        variant={btnVariant} />

      <input
        type="file"
        accept={accept}
        multiple={false}
        ref={hiddenFileInput}
        onChange={onChange}
        className="hidden" />

      {fileName && (
        <span aria-label="File name" className="ml-2">
          {trimFileName(fileName)}
        </span>
      )}
    </>
  );
}
