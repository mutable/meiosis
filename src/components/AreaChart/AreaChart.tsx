import React, { useMemo, useCallback } from 'react';
import { AreaClosed, Line, Bar } from '@visx/shape';

import { curveMonotoneX } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleTime, scaleLinear } from '@visx/scale';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, extent, bisector } from 'd3-array';
import { TimeSeries } from '../../utils/types';
import { AreaChartProps } from './AreaChart.types';

export const background = '#F3F4F6';
export const background2 = '#F3F4F6';
export const accentColor = '#DB2777';
export const accentColorDark = '#831843';
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: '0px solid white',
  color: 'black',
};

type TooltipData = TimeSeries;

// accessors
const getDate = (d: TimeSeries) => new Date(d.time);
const getValue = (d: TimeSeries) => parseFloat(d.value);
const bisectDate = bisector<TimeSeries, Date>((d: TimeSeries) => new Date(d.time)).left;

export const AreaChart = withTooltip<AreaChartProps, TooltipData>(
  ({
    width,
    height,
    data,
    unit,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  }: AreaChartProps & WithTooltipProvidedProps<TooltipData>) => {
    // bounds
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // scales
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left, innerWidth + margin.left],
          domain: extent(data, getDate) as [Date, Date],
        }),
      [innerWidth, margin.left],
    );

    const usageValueScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top, margin.top],
          domain: [0, (max(data, getValue) || 0) + innerHeight / 3.0],
          nice: true,
        }),
      [margin.top, innerHeight],
    );

    // tooltip handler
    const handleTooltip = useCallback(
      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
        const { x } = localPoint(event) || { x: 0 };
        const x0 = dateScale.invert(x);
        const index = bisectDate(data, x0, 1);
        const d0 = data[index - 1];
        const d1 = data[index];
        let d = d0;
        if (d1 && getDate(d1)) {
          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: x,
          tooltipTop: usageValueScale(getValue(d)),
        });
      },
      [showTooltip, usageValueScale, dateScale],
    );

    if (width < 10) return <></>;

    return (
      <div>
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#area-background-gradient)"
            rx={14}
          />
          <LinearGradient id="area-gradient" from={accentColor} to={accentColor} />
          <GridRows
            left={margin.left}
            scale={usageValueScale}
            width={innerWidth}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0}
            pointerEvents="none"
          />
          <GridColumns
            top={margin.top}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.2}
            pointerEvents="none"
          />
          <AreaClosed<TimeSeries>
            data={data}
            x={d => dateScale(getDate(d)) ?? 0}
            y={d => usageValueScale(getValue(d)) ?? 0}
            yScale={usageValueScale}
            strokeWidth={1}
            stroke="url(#area-gradient)"
            fill="url(#area-gradient)"
            curve={curveMonotoneX}
          />
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top }}
                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                stroke={accentColorDark}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
            </g>
          )}
        </svg>

        {tooltipData && (
          <div>
            <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={tooltipStyles}
            >
              {`${getValue(tooltipData).toFixed(2)} ${unit}`}
            </TooltipWithBounds>
          </div>
        )}
      </div>
    );
  },
);
