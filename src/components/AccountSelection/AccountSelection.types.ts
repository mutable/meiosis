export type AccountOption = {
  id: string;
  name: string;
}

export interface AccountSelectionProps {
  options: AccountOption[];
  activeOption: AccountOption;
  setActiveOption: (...args: AccountOption[]) => void;
}
