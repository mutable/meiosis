export interface SelectValue {
  id: string;
  value: string;
}

export interface SelectProps {
  options: SelectValue[];
  defaultSelected?: SelectValue;
  invalid?: boolean;
  showEmptyOption?: boolean;
  handleChange?: (e?: SelectValue) => void;
}
