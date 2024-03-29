import React from "react";
import { SelectProps } from "./Select.types";

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { joinClassnames, inputBorderClassnames } from "../../utils/tailwindHelpers";

export const Select: React.FC<SelectProps & React.HTMLAttributes<HTMLInputElement>> = ({ defaultSelected, options, handleChange, invalid, className, showEmptyOption = false, ...props }) => {
  const [selected, setSelected] = useState(defaultSelected)

  return (<Listbox
    value={selected}
    onChange={(e) => {
      setSelected(e);
      if (handleChange)
        handleChange(e);
    }}>
    {({ open }) => (
      <>
        <div className="mt-1 relative">
          <Listbox.Button
            className={`bg-white relative w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm ${inputBorderClassnames(invalid)}`}>
            <span className="block truncate">{selected ? selected.value : "Select..."}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>

            {invalid &&
              <div className="absolute inset-y-0 right-5 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            }
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="z-50 absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {showEmptyOption && <Listbox.Option
                key={"empty"}
                className={({ active }) =>
                  joinClassnames(
                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9'
                  )
                }
                value={null}
              >
                {({ selected, active }) => (
                  <>
                    <span className={joinClassnames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                      None
                    </span>

                    {selected ? (
                      <span
                        className={joinClassnames(
                          active ? 'text-white' : 'text-indigo-600',
                          'absolute inset-y-0 right-0 flex items-center pr-4'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
              }

              {options.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    joinClassnames(
                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9'
                    )
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={joinClassnames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                        {item.value}
                      </span>

                      {selected ? (
                        <span
                          className={joinClassnames(
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    )}
  </Listbox>
  )
}