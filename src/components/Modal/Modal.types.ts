export interface ModalProps {
  title?: string;
  open: boolean;
  onClose: (value: boolean) => void;
  children: React.ReactElement;
}
