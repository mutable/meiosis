export type IconType = 'bug' | 'history' | 'spinner' | 'stack' | 'plus' | 'trash' | 'envelope';

export interface IconProps {
  type: IconType;
  color?: string;
  size?: number;
}
