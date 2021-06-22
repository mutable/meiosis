import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactSelect } from "./ReactSelect";
import { ReactSelectProps } from './ReactSelect.types'
import { Form } from "../Form/Form";
import { Field } from "../Field/Field";
import { ControlledReactSelect } from "./ControlledReactSelect";
import { Button } from "../Button/Button";
import { OptionTypeBase } from "react-select";

export default {
  title: "General/ReactSelect",
  component: ReactSelect
} as Meta;

const options: OptionTypeBase[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Template: Story<ReactSelectProps> = (args) => <ReactSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: options,
  searchable: true,
  clearable: true,
};

export const InAForm: Story = (args) =>
  <Form {...args}
    onSubmit={(data) => alert("submitted\n" + JSON.stringify(data))} >
    {({ register, control, errors }) => {
      return <>
        <Field label="Flavor" invalid={!!errors.flavor} error="Please select a flavor.">
          <ControlledReactSelect
            name="flavor"
            control={control}
            options={options}
            rules={{ required: true }}
          />
        </Field>

        <Button variant="primary" label="Submit" />
      </>
    }
    }
  </Form>;
