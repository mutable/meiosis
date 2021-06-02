export type IconType = 'bug' | 'history' | 'spinner' | 'stack' | 'plus' | 'trash' | 'envelope' | 'edit';
export const IconTypes = ['bug', 'history', 'spinner', 'stack', 'plus', 'trash', 'envelope', 'edit'];

export interface IconProps {
  /**
   * Icon source can be an alias, such as 'bug' | 'history' | 'spinner' | 'stack' | 'plus' | 'trash' | 'envelope' | 'edit';
   * a string path, such as 'require("../../public/icons/microchip-light.svg")';
   * or an SVG object, such as \<svg ...>\<path d="M ..." ... /></svg>
   */
  src: IconType | string | object;
  color?: string;
  size?: number;
}
