import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from "./Form";
import { FormProps } from './Form.types'
import { Field } from '../Field/Field'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { ControlledSelect } from "../Select/ControlledSelect";
import { SelectValue } from "../Select/Select.types";

export default {
  title: "Forms/Form",
  component: Form
} as Meta;

interface FormData {
  fullName: string;
  email: string;
  age: number;
  country: SelectValue;
}

const countries: SelectValue[] = [
  { id: '1', value: 'Sweden' },
  { id: '2', value: 'Finland' },
  { id: '3', value: 'Norway' },
  { id: '4', value: 'Denmark' },
  { id: '5', value: 'Estonia' }
]

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

      <Field label="Country" invalid={!!errors.country} error="Please select a country.">
        <ControlledSelect
          name="country"
          control={control}
          options={countries}
          defaultSelected={args.defaultValues ? countries[0] : undefined}
          rules={{ required: true }}
        />
      </Field>

      <Button variant="primary" label="Submit" />
    </>
  }
</Form>;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (e) => {
    console.log(e)
    alert("submitted\n" + JSON.stringify(e))
  }
};

const defaultValues: FormData = {
  fullName: "Mut Ineer",
  email: "mutineer@mutable.io",
  age: 20,
  country: countries[1]
}

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  onSubmit: (e) => {
    console.log(e)
    alert("submitted\n" + JSON.stringify(e))
  },
  defaultValues: defaultValues
};