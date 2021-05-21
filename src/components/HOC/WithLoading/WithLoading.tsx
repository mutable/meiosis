import React from "react";
import { Spinner } from "../../Spinner/Spinner";

type WithLoadingProps = {
  isLoading: boolean;
};

export default function WithLoading<T extends object>(Component: React.ComponentType<T>): React.FC<T & WithLoadingProps> {
  return function WihLoadingComponent({ isLoading, ...props }: WithLoadingProps) {
    if (!isLoading) return (<Component {...props as T} />);

    return (<Spinner
      fullHeight={false}
    />);
  }
}
