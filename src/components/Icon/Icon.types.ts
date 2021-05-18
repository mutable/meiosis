export type IconType = 'bug' | 'history' | 'spinner' | 'stack' | 'plus' | 'trash' | 'envelope' | 'edit';

export interface IconProps {
  type: IconType;
  color?: string;
  size?: number;
}
