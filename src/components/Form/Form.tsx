import React from "react";
import { FormProps } from "./Form.types";
import { useForm } from 'react-hook-form';

export function Form<T>({ children, onSubmit, defaultValues, className, ...props }: FormProps<T> & React.HTMLProps<HTMLFormElement>) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<T>({ defaultValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      {...props} >
      {children({ register, errors, watch })}
    </form>
  )
}