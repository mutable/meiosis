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

const Template: Story<FormProps> = (args) => <Form {...args} >

  {({ register, control, errors }) =>
    <>
      <Field label="Name" invalid={!!errors.name} error="Username is required">
        <Input
          name="name"
          placeholder="Roger Waters"
          type="text"
          {...register("name", { required: true })}
        />
      </Field>

      <Field label="Email" invalid={!!errors.email} error="E-mail is required">
        <Input
          name="email"
          placeholder="roger.waters@grafana.com"
          type="text"
          {...register("email", { required: true })} />
      </Field>

      <Button primary label="Submit" />
    </>
  }
</Form>;

export const Default = Template.bind({});
Default.args = {

};

