import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { FileUpload } from "./FileUpload";
import { FileUploadProps } from './FileUpload.types'

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
