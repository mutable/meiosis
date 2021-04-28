import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal } from "./Modal";
import { ModalProps } from './Modal.types'
import { Form } from "../Form/Form"
import { Field } from "../Field/Field"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

export default {
  title: "Overlays/Modal",
  component: Modal,
  argTypes: {
    open: { control: false },
    title: { control: false }
  }
} as Meta;

export const Default: Story = (args) => {
  const [open, setOpen] = useState(true);

  const children = <Form onSubmit={(data) => { setOpen(false); console.log(data) }}>
    {({ register, control, errors }) =>
      <>
        <Field label="Name"
          description="Only use lowercase letters, numbers, underscores and dashes."
          invalid={!!errors.name}
          error="Please provide a valid namespace name.">
          <Input
            name="name"
            placeholder="Namespace"
            type="text"
            {...register("name", { required: true })}
          />
        </Field>

        <Button primary label="Submit" />
      </>
    }
  </Form>
  return (
    <div>
      <Button label={"Open"} onClick={() => setOpen(true)} />
      <Modal
        title="Create namespace"
        open={open}
        onClose={setOpen}>
        {children}
      </Modal>
    </div>
  );
};
