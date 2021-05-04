import React from "react";

export interface TabsProps {
  tabs: TabProps[];
  defaultIndex?: number;
}

export interface TabProps {
  name: string;
  component: React.ReactElement;
}
