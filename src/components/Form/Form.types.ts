import React from "react";
import { DeepPartial } from "react-hook-form";

export interface FormProps {
  children: (useFormParams: any) => React.ReactNode,
}
