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
      <Button label="Icon Path" iconBefore={require("../../public/icons/microchip-light.svg")} />
      <Button label="Icon SVG" iconBefore={googleLogo} />
    </div>
    <div className="flex mt-4 space-x-4">
      <Button loading label="Click me" variant="primary" />
    </div>
  </>
}

const googleLogo = (<svg className="w-5 h-5" viewBox="0 0 20 20" aria-hidden="true">
  <path fillRule="evenodd" d="M 10.199219 8.570312 L 10.199219 12 L 15.871094 12 C 15.640625 13.472656 14.152344 16.3125 10.199219 16.3125 C 6.785156 16.3125 4 13.484375 4 10 C 4 6.515625 6.785156 3.6875 10.199219 3.6875 C 12.140625 3.6875 13.441406 4.515625 14.183594 5.230469 L 16.898438 2.617188 C 15.15625 0.984375 12.898438 0 10.199219 0 C 4.671875 0 0.199219 4.472656 0.199219 10 C 0.199219 15.527344 4.671875 20 10.199219 20 C 15.96875 20 19.800781 15.941406 19.800781 10.230469 C 19.800781 9.574219 19.730469 9.074219 19.644531 8.574219 Z M 10.199219 8.570312 " clipRule="evenodd" />
</svg>);

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  onClick: () => { alert('onClick!') }
};