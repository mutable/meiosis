import React from "react";
import { UnpackNestedValue, DeepPartial } from "react-hook-form";

export interface FormProps<T> {
  children: (useFormParams: any) => React.ReactNode;
  onSubmit: (e: React.FormEvent) => {};
  defaultValues?: UnpackNestedValue<DeepPartial<T>>;
}
