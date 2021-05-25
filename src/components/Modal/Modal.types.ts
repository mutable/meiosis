export type Width = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

export interface ModalProps {
  title?: string;
  open: boolean;
  onClose: (value: boolean) => void;
  children: React.ReactElement;
  width?: Width;
}
