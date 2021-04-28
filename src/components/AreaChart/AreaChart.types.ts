import { TimeSeries } from "../../helpers/types";

export interface AreaChartProps {
  width: number;
  height: number;
  data: Array<TimeSeries>;
  unit: string;
  margin?: { top: number; right: number; bottom: number; left: number };
}
