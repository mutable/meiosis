import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Toggle } from "./Toggle";
import { ToggleProps } from './Toggle.types'
import { Form } from "../Form/Form";
import { Field } from "../Field/Field";
import { ControlledToggle } from "./ControlledToggle";
import { Button } from "../Button/Button";

export default {
  title: "General/Toggle",
  component: Toggle
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabledText: "On",
  disabledText: "Off"
};

export const InAForm: Story = (args) =>
  <Form {...args}
    onSubmit={(data) => alert("submitted\n" + JSON.stringify(data))}>
    {({ register, control, errors }) => {
      return <>
        <Field label="Airplane mode" invalid={!!errors.airplaneMode} error="Please enable airplane mode.">
          <ControlledToggle
            name="airplaneMode"
            control={control}
            enabledText="On"
            disabledText="Off"
            rules={{ required: true }}
            defaultOption={true}
          />
        </Field>

        <Button variant="primary" label="Submit" />
      </>
    }
    }
  </Form >;
