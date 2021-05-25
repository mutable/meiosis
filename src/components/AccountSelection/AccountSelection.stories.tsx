import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { AccountSelection } from "./AccountSelection";
import { AccountSelectionProps } from './AccountSelection.types'

export default {
  title: "Visualizations/AccountSelection",
  component: AccountSelection
} as Meta;

const options = [
  { id: "org1", name: "Organization One" },
  { id: "org2", name: "Organization Two" },
  { id: "org3", name: "Organization Three" }
]

export const Default: Story = (args) => {
  const [activeOption, setActiveOption] = useState(options[0]);

  return (
    <AccountSelection
      options={options}
      activeOption={activeOption}
      setActiveOption={setActiveOption}
    />
  );
};