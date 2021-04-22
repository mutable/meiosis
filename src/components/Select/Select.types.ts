export interface SelectValue {
  id: number;
  value: string;
}

export interface SelectProps {
  options: SelectValue[];
  defaultSelected?: SelectValue;
  invalid?: boolean;
  handleChange?: (e?: SelectValue) => void;
}
