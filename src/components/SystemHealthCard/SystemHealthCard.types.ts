import { TimeSeries } from "../../helpers/types";

export interface SystemHealthCardProps {
  /**
   * Array of elements in format { "time": "2021-03-04T16:14:43.514Z", "value": 13.355117901726734 }
   */
  data: Array<TimeSeries>;
  /**
   * Title of the card, such as "CPU Usage"
   */
  title: string;
  /**
   * Chart unit symbol, such as "%"
   */
  unit: string;
  /**
   * Icon needs to be imported using `import Icon from './path/icon.svg'`
   */
  icon: string;
  /**
   * If set to true, numbers below 70 are displayed green, between 70 and 90 yellow, above 90 red
   */
  useColoredNumber: boolean;
}
