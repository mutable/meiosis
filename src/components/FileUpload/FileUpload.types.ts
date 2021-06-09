export interface FileUploadProps {
  onFileUpload?: (files: File[]) => void;
  /** A comma-separated list of unique file type specifiers, such as `.jpg`, `image/*` or a valid MIME type string, with no extensions. 
   * More info: [Unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers). */
  accept?: string;
  multiple?: boolean;
  invalid?: false;
}
