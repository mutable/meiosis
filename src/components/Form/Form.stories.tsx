import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from "./Form";
import { FormProps } from './Form.types'
import { Field } from '../Field/Field'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export default {
  title: "Forms/Form",
  component: Form
} as Meta;

interface FormData {
  fullName: string;
  email: string;
  age: number;
}

const Template: Story<FormProps<FormData>> = (args) => <Form {...args} >
  {({ register, control, errors }) =>
    <>
      <Field label="Full Name" invalid={!!errors.fullName} error="Full Name is required.">
        <Input
          name="fullName"
          placeholder="Mut Ineer"
          type="text"
          {...register("fullName", { required: true })}
        />
      </Field>

      <Field label="Email" invalid={!!errors.email} error="Please enter a valid email.">
        <Input
          name="email"
          placeholder="mutineer@mutable.io"
          type="text"
          {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
      </Field>


      <Field label="Age" invalid={!!errors.age} error="Age should be between 18 and 99.">
        <Input
          name="age"
          placeholder="20"
          type="number"
          {...register("age", { min: 18, max: 99 })} />
      </Field>

      <Button primary label="Submit" />
    </>
  }
</Form>;

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => alert("submitted")
};

const defaultValues: FormData = {
  fullName: "Mut Ineer",
  email: "mutineer@mutable.io",
  age: 20
}

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  onSubmit: (e) => alert("submitted"),
  defaultValues: defaultValues
};