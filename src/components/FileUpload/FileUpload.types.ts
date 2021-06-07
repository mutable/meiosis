import { ChangeEvent } from "react";
import { ButtonVariant } from "../Button/Button.types";

export interface FileUploadProps {
  onFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Accepted file [extensions](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  accept?: string;
  btnVariant: ButtonVariant;
}
