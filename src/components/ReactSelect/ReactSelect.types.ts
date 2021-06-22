import { OptionTypeBase } from "react-select";

export interface ReactSelectProps {
  options: OptionTypeBase[];
  defaultOption?: OptionTypeBase[] | OptionTypeBase | null;
  invalid?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (e?: OptionTypeBase) => void;
}
