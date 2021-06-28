import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from './Checkbox.types'
import { Form } from "../Form/Form";
import { Field } from "../Field/Field";
import { Button } from "../Button/Button";

export default {
  title: "Checkbox",
  component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: <>I agree to the <span className="underline">privacy policy</span> </>
};

export const InAForm: Story = (args) =>
  <Form {...args}
    onSubmit={(data) => alert("submitted\n" + JSON.stringify(data))} >
    {({ register, control, errors }) => {
      return <>
        <Field
          invalid={!!errors.terms}
          error={'Please accept our privacy policy.'}>
          <Checkbox
            label="I agree to the privacy policy"
            {...register("terms", { required: true })} />
        </Field>
        <Button variant="primary" label="Submit" />
      </>
    }
    }
  </Form>;
