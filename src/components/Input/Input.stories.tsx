import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input } from "./Input";
import { InputProps } from './Input.types';
import { Field } from '../Field/Field';

export default {
  title: "Forms/Input",
  component: Input, 
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Email",
  invalid: false,
  disabled: false,
};

export const WithFieldValidation: Story = (args) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <Field 
        type="text"
        label="Username"
        placeholder="mutineer"
        invalid={value === ''}
        error={'This input is required'}>
        <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} {...args} />
      </Field>
    </div>
  );
};
