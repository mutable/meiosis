import React, { useState } from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pagination } from "./Pagination";
import { PaginationProps } from './Pagination.types'

export default {
  title: "Visualizations/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: { control: { disable: true } }
  }
} as Meta;

const Template: Story<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  return <Pagination
    {...args}
    currentPage={currentPage}
    onPageChanged={(page) => { setCurrentPage(page) }}
  />
}

export const Default: Story<PaginationProps> = Template.bind({});
Default.args = {
  totalItems: 40
};