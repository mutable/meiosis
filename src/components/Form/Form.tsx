import React from "react";
import { FormProps } from "./Form.types";
import { useForm } from 'react-hook-form';

export function Form({ children, className, ...props }: FormProps & React.HTMLProps<HTMLFormElement>) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children({ register, errors, watch })}
    </form>
  )
}