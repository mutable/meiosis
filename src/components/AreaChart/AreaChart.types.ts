import { UsageDatum } from "../../helpers/types";

export interface AreaChartProps {
  width: number;
  height: number;
  data: Array<UsageDatum>;
  unit: string;
  margin?: { top: number; right: number; bottom: number; left: number };
}
