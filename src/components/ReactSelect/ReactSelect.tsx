import React from "react";
import { ReactSelectProps } from "./ReactSelect.types";
import Select, { OptionTypeBase } from 'react-select'

export const ReactSelect: React.FC<ReactSelectProps & React.HTMLAttributes<HTMLDivElement>> = ({ options,
  defaultOption,
  invalid,
  searchable,
  clearable,
  disabled,
  loading,
  onChange,
  className, ...props }) => {

  const indigo500 = 'rgba(99, 102, 241)'
  const indigo100 = 'rgba(243, 244, 246)';
  const gray300 = 'rgba(209, 213, 219)';
  const gray500 = 'rgba(107, 114, 128)';
  const red500 = 'rgba(239, 68, 68)';
  const red300 = 'rgba(252, 165, 165)';

  const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? indigo500 : (state.isFocused ? indigo100 : "white"),
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: "0.375rem", // rounded-md
      borderColor: invalid ? red300 : (state.isFocused ? indigo500 : gray300),
      "*": {
        boxShadow: "none !important",
      },
      boxShadow: "none !important",
      "&:hover": {
        borderColor: ""
      }
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: invalid ? red300 : gray500
    }),
    singleValue: (provided: any, state: any) => ({ ...provided })
  }

  return (
    <Select
      className={className}
      styles={customStyles}
      options={options}
      defaultValue={defaultOption}
      isDisabled={disabled || false}
      isLoading={loading || false}
      isClearable={clearable || false}
      isSearchable={searchable || false}
      onChange={(e: any) => {
        if (onChange)
          onChange(e);
      }}
    />
  );
}