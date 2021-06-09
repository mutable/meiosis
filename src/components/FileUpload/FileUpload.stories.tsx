import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { FileUpload } from "./FileUpload";
import { FileUploadProps } from './FileUpload.types'
import { Button } from "../Button/Button";
import { Field } from "../Field/Field";
import { Form } from "../Form/Form";

export default {
  title: "Forms/FileUpload",
  component: FileUpload
} as Meta;

const Template: Story<FileUploadProps> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  btnVariant: "primary",
  accept: "image/png, image/jpeg",
  onFileUpload: (event) => { console.log('File upload', event.currentTarget?.files?.[0]) }
};

export const Multiple = Template.bind({});
Multiple.args = {
  btnVariant: "primary",
  accept: "image/png, image/jpeg",
  onFileUpload: (event) => { console.log('File upload', event.currentTarget?.files?.[0]) },
  multiple: true
};

export const InAForm: Story = (args) =>
  <Form {...args}
    onSubmit={(data) => alert("submitted\n" + JSON.stringify(data))} >
    {({ register, control, errors }) => {

      return <>
        <Field label="Attachments" invalid={!!errors.attachments}>
          <FileUpload
            {...register("attachments")}
            accept="image/*,.pdf"
            multiple={true}
            onFileUpload={(data) => console.log(data)}
          />
        </Field>

        <Button variant="primary" label="Submit" />
      </>
    }
    }
  </Form>;