import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { AreaChart } from '../AreaChart/AreaChart';
import { SystemHealthCardProps } from './SystemHealthCard.types';
import WithLoading from '../HOC/WithLoading/WithLoading';

export const SystemHealthCard: React.FC<SystemHealthCardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  data,
  title,
  icon,
  unit = '%',
  useColoredNumber = true,
  className,
  ...props }) => {
  if (!data || data.length < 1)
    return <></>;

  const firstvalue = parseFloat(data[0].value);
  const lastvalue = parseFloat(data[data.length - 1].value);

  const getColor = (value: number) => {
    if (!useColoredNumber)
      return 'gray-500';
    return value < 70 ? 'green-600' : (value < 90 ? 'yellow-600' : 'red-600')
  };

  return (
    <div className={`flex flex-col bg-white overflow-hidden shadow rounded-lg ${className}`} {...props}>
      <div className="flex-grow px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-gray-100 rounded-md p-3">
            <img className="h-8 w-auto" src={icon} alt={title} />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {title}
            </dt>
            <dd className="flex items-baseline">
              {data && data.length > 1 &&
                <div className={`text-2xl font-semibold text-${getColor(lastvalue)}`}>
                  {lastvalue.toFixed(2)} {unit}
                </div>
              }
              <div className={`ml-2 flex items-baseline text-sm font-semibold text-gray-500`}>
                <div className='text-lg'>{lastvalue - firstvalue > 0 ? <>&uarr;</> : <>&darr;</>}&nbsp;</div>
                {(lastvalue - firstvalue).toFixed(2)} {unit} in 1hr
              </div>
            </dd>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="h-10">
          {data && data.length && <ParentSize>{({ width, height }) => <AreaChart width={width} height={height} data={data} unit={unit} />}</ParentSize>}
        </div>
      </div>
    </div>
  );
}

export const SystemHealthCardWithLoading= WithLoading(SystemHealthCard);
