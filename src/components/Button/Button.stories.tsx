import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from './Button'
import { ButtonProps } from './Button.types'

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export default {
  component: Button,
  title: "General/Button",
  argTypes: {}
} as Meta;

export const Variants: Story = (args) => {
  return <>
    <div className="flex space-x-4">
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="White" variant="white" />
      <Button label="Pink" variant="pink" />
    </div>
    <div className="flex mt-4 space-x-4">
      <Button label="Icon Before" iconBefore="envelope" variant="primary" />
      <Button label="Icon After" iconAfter="trash" variant="secondary" />
      <Button label="Create" iconBefore="plus" variant="white" />
      <Button label="Edit" iconBefore="edit" variant="white" />
      <Button label="Report an issue" iconBefore="bug" variant="pink" />
    </div>
    <div className="flex mt-4 space-x-4">
      <Button loading label="Click me" variant="primary" />
    </div>
  </>
}

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  onClick: () => { alert('onClick!') }
};