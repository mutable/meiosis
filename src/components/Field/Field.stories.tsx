import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Field } from "./Field";
import { FieldProps } from './Field.types'
import { Input } from "../Input/Input";

export default {
  title: "Forms/Field",
  component: Field
} as Meta;

const Template: Story<FieldProps> = (args) => <Field {...args} >
  <Input
    placeholder="you@example.com"
    defaultValue=""
    type="text"
    name="email"
    id="email"
  />
</Field>;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  description: "Please enter your email",
  error: "Invalid email",
  invalid: false
};

